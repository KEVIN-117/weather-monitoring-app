import React, { useEffect } from 'react';

const Map: React.FC = () => {
  useEffect(() => {
    const latInp = document.querySelector<HTMLInputElement>("#latitude");
    const lngInp = document.querySelector<HTMLInputElement>("#longitude");
    const airQuality = document.querySelector<HTMLSpanElement>(".air-quality");
    const airQualityStat = document.querySelector<HTMLSpanElement>(".air-quality-status");
    const srcBtn = document.querySelector<HTMLButtonElement>(".search-btn");
    const errorLabel = document.querySelector<HTMLLabelElement>("label[for='error-msg']");
    const componentsEle = document.querySelectorAll<HTMLSpanElement>(".component-val");

    const appId = '0e1db76bd0d02662bf197a1a7ff4ae31';
    const link = 'https://api.openweathermap.org/data/2.5/air_pollution';

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionGathered, onPositionGatherError);
      } else {
        onPositionGatherError({ message: "Unable to access your location. Please enter the coordinates manually" });
      }
    };

    const onPositionGathered = (position: GeolocationPosition) => {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
      if (latInp && lngInp) {
        latInp.value = lat;
        lngInp.value = lon;
        getAirQuality(lat, lon);
      }
    };

    const getAirQuality = async (lat: string, lon: string) => {
      try {
        const rawData = await fetch(`${link}?lat=${lat}&lon=${lon}&appid=${appId}`);
        const airData = await rawData.json();
        setValueOfAir(airData);
        setComponentOfAir(airData);
      } catch (e) {
        onPositionGatherError(e);
      }
    };

    const setValueOfAir = (airData: any) => {
      const aqi = airData.list[0].main.aqi;
      let airQualityStatus = '';
      let color = '';
      switch (aqi) {
        case 1:
          airQualityStatus = 'Good';
          color = "rgb(57,172,71)";
          break;
        case 2:
          airQualityStatus = 'Fair';
          color = "rgb(110,168,207)";
          break;
        case 3:
          airQualityStatus = 'Moderate';
          color = "rgb(110,156,222)";
          break;
        case 4:
          airQualityStatus = 'Poor';
          color = "rgb(255,66,66)";
          break;
        case 5:
          airQualityStatus = 'Very Poor';
          color = "rgb(255,14,14)";
          break;
        default:
          airQualityStatus = 'Unavailable';
      }
      if (airQuality && airQualityStat) {
        airQuality.innerText = aqi.toString();
        airQualityStat.innerText = airQualityStatus;
        airQualityStat.style.color = color;
      }
    };

    const setComponentOfAir = (airData: any) => {
      const components = { ...airData.list[0].components };
      componentsEle.forEach(ele => {
        const attr = ele.getAttribute("data-comp");
        if (attr) {
          ele.innerText = components[attr] + ' µg/m³';
        }
      });
    };

    const onPositionGatherError = (e: any) => {
      if (errorLabel) {
        errorLabel.innerText = e.message;
      }
    };

    const handleSearchClick = () => {
      if (latInp && lngInp) {
        const lat = parseFloat(latInp.value).toFixed(4);
        const lng = parseFloat(lngInp.value).toFixed(4);
        getAirQuality(lat, lng);
      }
    };

    if (srcBtn) {
      srcBtn.addEventListener("click", handleSearchClick);
    }

    getUserLocation();

    // Cleanup if necessary
    return () => {
      if (srcBtn) {
        srcBtn.removeEventListener("click", handleSearchClick);
      }
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Air Quality Indicator</h1>
      <div className="loc-container">
        <h2 className="sub-heading">Your Location</h2>
        <label htmlFor="error-msg" className="error" style={{ color: 'red' }}></label>
        <br />
        <input type="number" step="0.0001" className="loc-input" id="latitude" placeholder="Latitude" name="lat" />
        <input type="number" step="0.0001" className="loc-input" id="longitude" placeholder="Longitude" name="long" />
        <button className="search-btn">Search</button>
      </div>
      <div className="air-info">
        <h2 className="sub-heading">Air Quality Index</h2>
        <span className="air-quality">...</span>
        <span className="arr">&nbsp;&rarr;&nbsp;</span>
        <span className="air-quality-status">...</span>
        <div className="container-component">
          <h2 className="sub-heading container-heading">Concentration of pollutants in air</h2>
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
            <h3 className="component-class">Fine Particles Matter :</h3>
            <span className="component-val" data-comp="pm2_5"></span>
          </div>
          <div>
            <h3 className="component-class">Course Particle Matter :</h3>
            <span className="component-val" data-comp="pm10"></span>
          </div>
          <div>
            <h3 className="component-class">Ammonia :</h3>
            <span className="component-val" data-comp="nh3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
