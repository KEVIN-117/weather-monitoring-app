import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  getUserLocation,
  getAirQuality,
  setValueOfAir,
  setComponentOfAir,
  handleSearchClick,
} from "./utils";

const AirQualityMap: React.FC = () => {
  useEffect(() => {
    const latInp = document.querySelector<HTMLInputElement>("#latitude");
    const lngInp = document.querySelector<HTMLInputElement>("#longitude");
    const airQuality = document.querySelector<HTMLSpanElement>(".air-quality");
    const airQualityStat = document.querySelector<HTMLSpanElement>(
      ".air-quality-status"
    );
    const srcBtn = document.querySelector<HTMLButtonElement>(".search-btn");
    const errorLabel = document.querySelector<HTMLLabelElement>(
      "label[for='error-msg']"
    );
    const componentsEle =
      document.querySelectorAll<HTMLSpanElement>(".component-val");

    let map: L.Map | undefined;
    let marker: L.Marker | undefined;

    const onPositionGatherError = (error: GeolocationPositionError) => {
      if (errorLabel) {
        errorLabel.innerText = error.message;
      }
    };

    const getAirQualityFn = (lat: string, lon: string) => {
      getAirQuality(
        lat,
        lon,
        (airData) => setValueOfAir(airData, airQuality, airQualityStat),
        (airData) => setComponentOfAir(airData, componentsEle),
        (error: Error) =>
          onPositionGatherError(error as unknown as GeolocationPositionError)
      );
    };

    const onPositionGathered = (position: GeolocationPosition) => {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
      if (latInp && lngInp) {
        latInp.value = lat;
        lngInp.value = lon;
        getAirQualityFn(lat, lon);
        if (!map) {
          map = L.map("map").setView([parseFloat(lat), parseFloat(lon)], 13);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);
          L.marker([parseFloat(lat), parseFloat(lon)])
            .addTo(map)
            .bindPopup("You are here")
            .openPopup();
        } else {
          map.setView([parseFloat(lat), parseFloat(lon)], 13);
        }
      }
    };

    if (srcBtn) {
      srcBtn.addEventListener("click", () =>
        handleSearchClick(latInp, lngInp, getAirQualityFn)
      );
    }

    getUserLocation(onPositionGathered, onPositionGatherError);

    return () => {
      if (srcBtn) {
        srcBtn.removeEventListener("click", () =>
          handleSearchClick(latInp, lngInp, getAirQualityFn)
        );
      }
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Air Quality Indicator</h1>
      <div className="loc-container">
        <h2 className="sub-heading">Your Location</h2>
        <label
          htmlFor="error-msg"
          className="error"
          style={{ color: "red" }}
        ></label>
        <br />
        <input
          type="number"
          step="0.0001"
          className="loc-input"
          id="latitude"
          placeholder="Latitude"
          name="lat"
        />
        <input
          type="number"
          step="0.0001"
          className="loc-input"
          id="longitude"
          placeholder="Longitude"
          name="long"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="air-info">
        <h2 className="sub-heading">Air Quality Index</h2>
        <span className="air-quality">...</span>
        <span className="arr">&nbsp;&rarr;&nbsp;</span>
        <span className="air-quality-status">...</span>
        <div className="container-component">
          <h2 className="sub-heading container-heading">
            Concentration of pollutants in air
          </h2>
          <div>
            <h3 className="component-class">Carbon Monoxide :</h3>
            <span className="component-val" data-comp="co"></span>
          </div>
          <div>
            <h3 className="component-class">Nitrogen Monoxide :</h3>
            <span className="component-val" data-comp="no"></span>
          </div>
          <div>
            <h3 className="component-class">Nitrogen Dioxide :</h3>
            <span className="component-val" data-comp="no2"></span>
          </div>
          <div>
            <h3 className="component-class">Ozone :</h3>
            <span className="component-val" data-comp="o3"></span>
          </div>
          <div>
            <h3 className="component-class">Sulphur Dioxide :</h3>
            <span className="component-val" data-comp="so2"></span>
          </div>
          <div>
            <h3 className="component-class">PM2.5 :</h3>
            <span className="component-val" data-comp="pm2_5"></span>
          </div>
          <div>
            <h3 className="component-class">PM10 :</h3>
            <span className="component-val" data-comp="pm10"></span>
          </div>
          <div>
            <h3 className="component-class">Ammonia :</h3>
            <span className="component-val" data-comp="nh3"></span>
          </div>
        </div>
      </div>

      {/* Mapa de Leaflet */}
      <div
        id="map"
        style={{ height: "400px", width: "100%", marginTop: "20px" }}
      ></div>
    </div>
  );
};

export default AirQualityMap;
