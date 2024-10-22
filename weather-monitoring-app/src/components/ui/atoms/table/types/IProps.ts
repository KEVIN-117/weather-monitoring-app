export interface AirQualityData {
  list: {
    main: {
      aqi: number;
    };

    components: AirQualityComponents;
  }[];
}

export interface AirQualityComponents {
  co: number;

  no: number;

  no2: number;

  o3: number;

  so2: number;

  pm2_5: number;

  pm10: number;

  nh3: number;
}

export interface Columns {
  uid: string;
  name: string;
}
