const iconMenu = document.querySelector('.menu');
const iconClose = document.querySelector('.close');
const sidebar = document.querySelector('.navbar');

iconMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});