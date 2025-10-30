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

    // Live Search Functionality
document.getElementById('menuSearch').addEventListener('keyup', function () {
  let input = this.value.toLowerCase();
  let items = document.querySelectorAll('.menu-item');

  items.forEach(function (item) {
    let name = item.querySelector('.name').textContent.toLowerCase();
    let description = item.querySelector('.text').textContent.toLowerCase();

    if (name.includes(input) || description.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});