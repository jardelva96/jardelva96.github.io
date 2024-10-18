document.addEventListener('DOMContentLoaded', () => {
    // Weather with Icon
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Florianopolis&units=metric&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            const weatherDesc = data.weather[0].description;
            const temp = data.main.temp;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('weather-info').textContent = `${weatherDesc}, ${temp}°C`;
            document.getElementById('weather-icon').src = icon;
        });

    // Map Initialization using Leaflet
    const map = L.map('map').setView([-27.5954, -48.5480], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);

    // Bitcoin Price Chart using Chart.js
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('crypto-chart').getContext('2d');
            const prices = data.prices.map(price => price[1]);
            const dates = data.prices.map(price => new Date(price[0]).toLocaleDateString());

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Bitcoin Price (USD)',
                        data: prices,
                        borderColor: '#7d5fff',
                        backgroundColor: 'rgba(125, 95, 255, 0.5)',
                        fill: true
                    }]
                }
            });
        });

    // Random Joke
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke-info').textContent = `${data.setup} - ${data.punchline}`;
        });

    // Quote of the Day
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-info').textContent = `"${data.content}" - ${data.author}`;
        });
});
