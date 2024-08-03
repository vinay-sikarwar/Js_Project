const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('wind-speed');

const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6034588270c1c55a5cp1fcc54jsn49a95577eec9',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();
