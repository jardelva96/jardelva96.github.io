document.addEventListener('DOMContentLoaded', () => {
    // API Weather
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Florianopolis&units=metric&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-info').textContent = `Currently: ${data.weather[0].description}, ${data.main.temp}°C`;
        });

    // API Local Time
    setInterval(() => {
        const now = new Date();
        document.getElementById('time-info').textContent = now.toLocaleTimeString();
    }, 1000);

    // API Crypto Prices
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            document.getElementById('crypto-info').textContent = `Bitcoin: $${data.bitcoin.usd}`;
        });

    // API Joke
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke-info').textContent = `${data.setup} - ${data.punchline}`;
        });

    // API Quote of the Day
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-info').textContent = `"${data.content}" - ${data.author}`;
        });
});
