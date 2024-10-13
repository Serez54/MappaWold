// script.js

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const icao = document.getElementById('icao').value.toUpperCase();
    const flightNumber = document.getElementById('flightNumber').value;
    const aircraft = document.getElementById('aircraft').value;

    const airportCoordinates = getAirportCoordinates(icao);

    const marker = L.marker(airportCoordinates).addTo(map);
    marker.bindPopup(`<b>${icao}</b><br>Numero di Volo: ${flightNumber}<br>Aereo: ${aircraft}`).openPopup();
});

function getAirportCoordinates(icao) {
    const airports = {
        "LAX": [33.9416, -118.4085],
        "JFK": [40.6413, -73.7781],
        "CDG": [49.0097, 2.5479],
        "FCO": [41.7999, 12.2462],
        "DXB": [25.2532, 55.3657],
    };

    return airports[icao] || [20, 0];
}
