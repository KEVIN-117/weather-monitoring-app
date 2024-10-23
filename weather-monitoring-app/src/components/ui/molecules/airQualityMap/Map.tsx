"use client";
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ILocation } from "./types/IProps";
import { useRouter } from "next/navigation";


export function Map() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useState<ILocation>({});
  const router = useRouter();
  const mapRef = useRef<L.Map | null>(null);
  const [lat, setLat] = useState<string>("");
  const [lng, setLng] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getUserLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // success in getting location
          const newLat = position.coords.latitude.toFixed(4);
          const newLng = position.coords.longitude.toFixed(4);
          setLocation({ lat: newLat, lng: newLng });
          setLat(newLat);
          setLng(newLng);
          setLoading(false);
        },
        (error) => {
          // error in getting location
          setError(`Error getting location: ${error.message}`);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
      setLoading(false);
    }
  };

  // Initialize location on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  // Initialize map only once
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([0, 0], 2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update map view and markers when coordinates change
  useEffect(() => {
    if (!lat || !lng || !mapRef.current) return;

    const newLat = parseFloat(lat);
    const newLng = parseFloat(lng);

    if (isNaN(newLat) || isNaN(newLng)) return;

    // Update map view
    mapRef.current.setView([newLat, newLng], 13);

    // Clear existing markers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current?.removeLayer(layer);
      }
    });

    // Add new marker
    L.marker([newLat, newLng])
      .addTo(mapRef.current)
      .bindPopup('<a href="/profile">mas información </a>')
      .openPopup();
  }, [lat, lng]);

  const handleSearch = () => {
    if (!lat || !lng) {
      setError("Please enter both latitude and longitude");
      return;
    }

    const newLat = parseFloat(lat);
    const newLng = parseFloat(lng);

    if (isNaN(newLat) || isNaN(newLng)) {
      setError("Please enter valid coordinates");
      return;
    }

    if (mapRef.current) {
      const newLatLng = new L.LatLng(newLat, newLng);
      mapRef.current.setView(newLatLng, 13);

      // Clear existing markers
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current?.removeLayer(layer);
        }
      });

      // Add new marker
      L.marker(newLatLng)
        .addTo(mapRef.current)
        .bindPopup("Te encuentras aqui")
        .openPopup();
    }
  };

  mapRef.current?.on("click", (e) => {
    const { lat, lng } = e.latlng;
    router.push(`/dashboard/Map/details?lat=${lat}&lng=${lng}`);
  });


  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 ">
        <div className="flex flex-col gap-4">
          {loading && <div>Loading location...</div>}
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={getUserLocation}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 w-64"
            >
              Obtener ubicación actual
            </button>
            <div className="flex items-center gap-4">
              <label htmlFor="lat" className="mb-1">
                Latitud:
              </label>
              <input
                type="text"
                id="lat"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="Enter latitude"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor="lng" className="mb-1">
                Longitud:
              </label>
              <input
                type="text"
                id="lng"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                placeholder="Enter longitude"
                className="border p-2 rounded"
                required
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 w-64"
            >
              Buscar ubicación
            </button>
          </div>
          <div
            id="map"
            className="flex-grow w-[85vw] h-[85vh] border rounded"
          // style={{ minHeight: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}
