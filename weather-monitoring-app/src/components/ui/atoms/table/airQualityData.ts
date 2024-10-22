import { AirQualityComponents } from "./types/IProps";

export interface AirQualityData {
  list: [
    {
      main: { aqi: number };
      components: AirQualityComponents;
    }
  ];
}

export const appId = "0e1db76bd0d02662bf197a1a7ff4ae31";
export const link = "https://api.openweathermap.org/data/2.5/air_pollution";

// function for getting user location
export const getUserLocation = (
  onPositionGathered: (position: GeolocationPosition) => void,
  onPositionGatherError: (error: GeolocationPositionError) => void
) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      onPositionGathered,
      onPositionGatherError
    );
  } else {
    onPositionGatherError({
      message:
        "Unable to access your location. Please enter the coordinates manually",
    } as GeolocationPositionError);
  }
};

// function for getting air quality
export const getAirQuality = async (
  lat: string,
  lon: string,
  setValueOfAir: (airData: AirQualityData) => void,
  setComponentOfAir: (airData: AirQualityData) => void,
  onError: (e: Error) => void
) => {
  try {
    const rawData = await fetch(`${link}?lat=${lat}&lon=${lon}&appid=${appId}`);
    const airData: AirQualityData = await rawData.json();
    setValueOfAir(airData);
    setComponentOfAir(airData);
  } catch (e) {
    onError(e as Error);
  }
};

// function for setting value of air quality
export const setValueOfAir = (
  airData: AirQualityData,
  airQuality: HTMLSpanElement | null,
  airQualityStat: HTMLSpanElement | null
) => {
  const aqi = airData.list[0].main.aqi;
  let airQualityStatus = "";
  let color = "";
  switch (aqi) {
    case 1:
      airQualityStatus = "Good";
      color = "rgb(57,172,71)";
      break;
    case 2:
      airQualityStatus = "Fair";
      color = "rgb(110,168,207)";
      break;
    case 3:
      airQualityStatus = "Moderate";
      color = "rgb(110,156,222)";
      break;
    case 4:
      airQualityStatus = "Poor";
      color = "rgb(255,66,66)";
      break;
    case 5:
      airQualityStatus = "Very Poor";
      color = "rgb(255,14,14)";
      break;
    default:
      airQualityStatus = "Unavailable";
  }
  if (airQuality && airQualityStat) {
    airQuality.innerText = aqi.toString();
    airQualityStat.innerText = airQualityStatus;
    airQualityStat.style.color = color;
  }
};

export const setComponentOfAir = (
  airData: AirQualityData,
  componentsEle: NodeListOf<HTMLSpanElement>
) => {
  const components = airData.list[0].components;
  componentsEle.forEach((ele) => {
    const attr = ele.getAttribute("data-comp");
    if (attr && components[attr as keyof AirQualityComponents] !== undefined) {
      ele.innerText = components[attr as keyof AirQualityComponents] + " µg/m³";
    }
  });
};

export const handleSearchClick = (
  latInp: HTMLInputElement | null,
  lngInp: HTMLInputElement | null,
  getAirQualityFn: (lat: string, lon: string) => void
) => {
  if (latInp && lngInp) {
    const lat = parseFloat(latInp.value).toFixed(4);
    const lng = parseFloat(lngInp.value).toFixed(4);
    getAirQualityFn(lat, lng);
  }
};
