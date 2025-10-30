const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
// Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 
// Leaflet Map
var map = L.map('map').setView([-33.918861, 18.423300], 13); // Cape Town coordinates

// map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// marker for the coffee shop
L.marker([-33.918861, 18.423300]).addTo(map)
    .bindPopup("<b>G&B Coffee</b><br>76 Bree Street, Cape Town")
    .openPopup();