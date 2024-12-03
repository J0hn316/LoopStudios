const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

addEventListener('click', navToggle);
