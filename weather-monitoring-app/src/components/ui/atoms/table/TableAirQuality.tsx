import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  Input,
} from "@nextui-org/react";
import type { AirQualityData } from "./types/IProps";
import { columns } from "./columnData";
import { getUserLocation, getAirQuality } from "./airQualityData";

const qualityColorMap: {
  [key: string]: "success" | "primary" | "warning" | "danger";
} = {
  Good: "success",
  Fair: "primary",
  Moderate: "warning",
  Poor: "danger",
  "Very Poor": "danger",
};

export function TableAirQuality() {
  const [airData, setAirData] = useState<AirQualityData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetAirQuality = async (lat: string, lon: string) => {
    setLoading(true);
    try {
      await getAirQuality(
        lat,
        lon,
        (data) => setAirData(data),
        (data) => setAirData(data),
        (error) => setError(error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleGetLocation = () => {
    setLoading(true);
    getUserLocation(
      (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lon = position.coords.longitude.toFixed(4);
        setLat(lat);
        setLon(lon);
        handleGetAirQuality(lat, lon);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  };
  const handleSearchClick = () => {
    if (!lat || !lon) {
      alert("Please enter latitude and longitude values");
      return;
    }

    setLoading(true);
    getAirQuality(
      lat,
      lon,
      (data) => setAirData(data),
      (data) => setAirData(data),
      (error) => setError(error.message)
    );
  };
  const getAirQualityStatus = (aqi: number) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unavailable";
    }
  };

  const renderCell = React.useCallback(
    (metric: string, columnKey: string) => {
      if (!airData) return null;

      const components = airData.list[0].components;
      const aqi = airData.list[0].main.aqi;
      const status = getAirQualityStatus(aqi);

      switch (columnKey) {
        case "metrics":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{metric}</p>
            </div>
          );
        case "index":
          if (metric === "AQI") {
            return (
              <Chip
                className="capitalize"
                color={qualityColorMap[status as keyof typeof qualityColorMap]}
                size="sm"
                variant="flat"
              >
                {status}
              </Chip>
            );
          }
          return null;
        case "value":
          if (metric === "AQI") {
            return aqi.toString();
          }
          return `${
            components[metric.toLowerCase() as keyof typeof components]
          } µg/m³`;
        default:
          return null;
      }
    },
    [airData]
  );

  const items = [
    { id: "aqi", name: "AQI" },
    { id: "co", name: "CO" },
    { id: "no", name: "NO" },
    { id: "no2", name: "NO2" },
    { id: "o3", name: "O3" },
    { id: "so2", name: "SO2" },
    { id: "pm2_5", name: "PM2.5" },
    { id: "pm10", name: "PM10" },
    { id: "nh3", name: "NH3" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      <Button color="primary" onClick={handleGetLocation} isLoading={loading}>
        Obtener Ubicación Actual
      </Button>
      <div className="flex gap-4">
        <Input
          placeholder="Latitud"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <Input
          placeholder="Longitud"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
      </div>
      <Button color="primary" onClick={handleSearchClick}>
        Obtener Calidad del Aire
      </Button>
      {error && (
        <div className="text-danger text-center p-2">Error: {error}</div>
      )}

      {airData && (
        <Table aria-label="Tabla de calidad del aire">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align="start"
                className="text-base font-semibold"
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item.name, columnKey as string)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
