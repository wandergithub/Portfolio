const btn = document.querySelector('#hamburguer');
const menuVar = document.querySelectorAll('.menu-var, #nav-bar');
const content = document.body.querySelectorAll('*:not(.menu-var *,#menu-v)');
const quitbtn = document.querySelector('#quitbtn');
const menuLinks = document.querySelectorAll('div .menu-flex a ');
const navVar = document.getElementById('nav-bar');
const aTags = document.querySelectorAll('.menu-flex');
function displayMenu() {
  btn.classList.add('hidden');
  content.forEach((e) => e.classList.add('hidden'));
  menuVar.forEach((e) => e.classList.remove('hidden'));
  navVar.style.justifyContent = 'center';
  navVar.style.textAlign = 'end';
  document.querySelectorAll('.menu-flex').forEach((e) => { e.style.gap = '200px'; });
}

function quitMenu() {
  quitbtn.classList.add('hidden');
  menuVar.forEach((e) => e.classList.add('hidden'));
  content.forEach((e) => e.classList.remove('hidden'));
  navVar.removeAttribute('style');
  aTags.forEach((e) => e.removeAttribute('style'));
}

btn.addEventListener('click', displayMenu);
quitbtn.addEventListener('click', quitMenu);
menuLinks.forEach((e) => e.addEventListener('click', quitMenu));