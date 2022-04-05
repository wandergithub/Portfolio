const btn = document.querySelector('#hamburguer');
const menuVar = document.querySelectorAll('.menu-var, #nav-bar');
const content = document.body.querySelectorAll('*:not(.menu-var *)');

function display() {
  btn.classList.add('hidden');
  content.forEach((e) => e.classList.add('hidden'));
  menuVar.forEach((e) => e.classList.remove('hidden'));
}
btn.addEventListener('click', display);
