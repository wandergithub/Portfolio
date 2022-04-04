const btn = document.querySelector('#hamburguer');
const menuVar = document.querySelector('.menu-var');
const content = document.body.querySelectorAll('*:not(.menu-var *)');

function display() {
  btn.classList.add('hidden');
  content.forEach((e) => e.classList.add('hidden'));
  menuVar.classList.remove('hidden');
}
btn.addEventListener('click', display);
