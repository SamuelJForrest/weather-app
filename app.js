const inputValue = document.querySelector('.input-value');
const submitBtn = document.querySelector('.submit-btn');
const cityName = document.querySelector('.name');
const cityTemp = document.querySelector('.temp');
const cityDescription = document.querySelector('.description');
const cityIcon = document.querySelector('.icon');
const locationForm = document.querySelector('.location');
const highLow = document.querySelector('.high-low');
const weatherIcon = document.querySelector('.weather-icon');
const weatherForm = document.querySelector('#weather-form');


weatherForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=e3ffced8a3de62b8d738d5fe0ad79f9c`)
    .then(response => {
        return response.json()
    })
    .then(response => {
        let nameValue = response['name'];
        let country = response['sys']['country'];
        let tempValue = Math.floor(response['main']['temp']);
        let descValue = response['weather'][0]['description'];
        let iconValue = response['weather'][0]['id'];
        let maxTemp = Math.floor(response['main']['temp_max']);
        let minTemp = Math.floor(response['main']['temp_min']);


        cityName.innerHTML = `${nameValue}, ${country}`;
        cityTemp.innerHTML = `${tempValue}°C`;
        cityDescription.innerHTML = descValue;
        highLow.innerHTML = `${minTemp}°C/${maxTemp}°C`;
        if (iconValue >= 200 && iconValue <= 232) {
            weatherIcon.src = './img/weather-icons/png/wsymbol_0024_thunderstorms.png';
        } else if (iconValue >= 300 && iconValue <= 321){
            weatherIcon.src = './img/weather-icons/png/wsymbol_0017_cloudy_with_light_rain.png';
        } else if (iconValue >=500 && iconValue <= 531) {
            weatherIcon.src = './img/weather-icons/png/wsymbol_0010_heavy_rain_showers.png';
        } else if (iconValue >= 600 && iconValue <= 622){
            weatherIcon.src = './img/weather-icons/png/wsymbol_0012_heavy_snow_showers.png';
        } else if (iconValue >= 701 && iconValue <= 781) {
            weatherIcon.src = './img/weather-icons/png/wsymbol_0007_fog.png';
        } else if (iconValue === 800) {
            weatherIcon.src = './img/weather-icons/png/wsymbol_0001_sunny.png';
        }
        else if (iconValue >= 801 && iconValue <= 804) {
            weatherIcon.src = './img/weather-icons/png/wsymbol_0003_white_cloud.png';
        }

        if (locationForm.childNodes.length > 3){
            locationForm.childNodes[3].remove();
        }

        inputValue.value = '';
        console.log(response);
    })
    .catch(error => {
        // console.log(error);
        const warningMessage = document.createElement('p');
        if (locationForm.childNodes.length > 3){
            locationForm.childNodes[3].remove();
        }
        warningMessage.classList.add('warning');
        warningMessage.textContent = 'Please Select a valid city';
        locationForm.append(warningMessage);

        console.log(locationForm.childNodes);

        inputValue.addEventListener('click', () => {
            warningMessage.remove();
        })
    })    
});
