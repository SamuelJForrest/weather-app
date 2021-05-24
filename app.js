const inputValue = document.querySelector('.input-value');
const submitBtn = document.querySelector('.submit-btn');
const cityName = document.querySelector('.name');
const cityTemp = document.querySelector('.temp');
const cityDescription = document.querySelector('.description');
const cityIcon = document.querySelector('.icon');
const locationForm = document.querySelector('.location');
const highLow = document.querySelector('.high-low');


submitBtn.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=e3ffced8a3de62b8d738d5fe0ad79f9c`)
    .then(response => {
        return response.json()
    })
    .then(response => {
        let nameValue = response['name'];
        let tempValue = response['main']['temp'];
        let descValue = response['weather'][0]['description'];
        let iconValue = response['weather'][0]['icon'];
        let maxTemp = Math.floor(response['main']['temp_max']);
        let minTemp = Math.floor(response['main']['temp_min']);
        // let iconUrl = `http://openweathermap.org/img/w/${iconValue}.png`;


        cityName.innerHTML = nameValue;
        cityTemp.innerHTML = `${tempValue}°C`;
        cityDescription.innerHTML = descValue;
        highLow.innerHTML = `${minTemp}°C/${maxTemp}°C`;
        // cityIcon.src = iconUrl;


        console.log(response);
    })


    .catch(error => {
        console.log(error);
    })    
});

