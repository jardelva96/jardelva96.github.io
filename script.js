document.addEventListener('DOMContentLoaded', () => {
    // Weather with Icon
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Florianopolis&units=metric&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            const weatherDesc = data.weather[0].description;
            const
