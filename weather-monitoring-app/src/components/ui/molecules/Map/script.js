const latInp = document.querySelector("#latitude");
const lngInp = document.querySelector("#longitude");
const airQuality = document.querySelector(".air-quality");
const airQualityStat = document.querySelector(".air-quality-status");
const srcBtn = document.querySelector(".search-btn");
const errorLabel = document.querySelector("label[for='error-msg']");
const componentsEle = document.querySelectorAll(".component-val");

const appId = '0e1db76bd0d02662bf197a1a7ff4ae31'
const link = 'https://api.openweathermap.org/data/2.5/air_pollution'
const getUserLocation= () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPositionGathered, onPositionGatherError);
    }
    else{
        onPositionGatherError({message: "Unable to access your location. Please enter the coordinates manually"});

    }
}

const onPositionGathered = (position) =>{

    let lat = position.coords.latitude.toFixed(4),
    lon = position.coords.longitude.toFixed(4);
    
    latInp.value = lat
    lngInp.value = lon;
    getAirQuality(lat,lon)
}

const getAirQuality = async(lat,lon) =>{
    const rawData = await fetch(`${link}?lat=${lat}&lon=${lon}&appid=${appId}`).catch(e =>{onPositionGatherError(e)})
    const airData = await rawData.json();
    setValueOfAir(airData);
    setComponentOfAir(airData);
}

const setValueOfAir = (airData) =>{
    const aqi = airData.list[0].main.aqi;
    let airQualityStatus = '',color=''

    airQuality.innerText = aqi;
    switch(aqi){
        case 1:{
            airQualityStatus = 'Good'
            color = "rgb(57,172,71)"
            break
        }
        case 2:{
            airQualityStatus = 'Fair'
            color = "rgb(110,168,207)"
            break
        }
        case 3:{
            airQualityStatus = 'Moderate'
            color = "rgb(110,156,222)"
            break
        }
        case 4:{
            airQualityStatus = 'Poor'
            color = "rgb(255,66,66)"
            break
        }
        case 5:{
            airQualityStatus = 'Very Poor'
            color = "rgb(255,14,14)"
            break
        }
        default:{
            airQualityStatus = 'Unavailable'
        }

    }
    airQualityStat.innerText = airQualityStatus;
    airQualityStat.style.color = color; 
}

const setComponentOfAir = (airData) =>{
    let components = {...airData.list[0].components}
    componentsEle.forEach(ele =>{
        const attr = ele.getAttribute("data-comp");
        ele.innerText = components[attr] + ' pg/m3';
    })
}

const onPositionGatherError = (e) =>{
    errorLabel.innerText = e.message;

}

// ! If use is not willing to share location, then we can enter the coordinates manually
srcBtn.addEventListener("click", () =>{
    let lat = parseFloat(latInp.value).toFixed(4),
    lng = parseFloat(lngInp.value).toFixed(4);
    getAirQuality(lat,lng);


})
getUserLocation()