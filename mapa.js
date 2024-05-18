const iconMenu = document.querySelector('.menu');
const iconClose = document.querySelector('.close');
const sidebar = document.querySelector('.navbar');

iconMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});


var map = L.map("map").setView([20.67935, -103.39762], 18);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([20.67935, -103.39762]).addTo(map);

function activarMapa() {
  map.setInteractive(true); // Habilitar interactividad cuando se hace clic en el mapa
}

document.getElementById("map").addEventListener("click", activarMapa);
