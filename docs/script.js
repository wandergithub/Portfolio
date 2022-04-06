const btn = document.querySelector('#hamburguer');
const menuVar = document.querySelectorAll('.menu-var, #nav-bar');
const content = document.body.querySelectorAll('*:not(.menu-var *,#menu-v)');
const quitbtn = document.querySelector('#quitbtn');
const menuLinks = document.querySelectorAll('div .menu-flex a ');
const navVar = document.getElementById('nav-bar');
const aTags = document.querySelectorAll('.menu-flex');
const btnDetails = document.querySelectorAll('.btnDetails');
const contentDetails = document.body.querySelectorAll('*:not(#section-4 article:nth-child(1) *,#section-4 article:nth-child(1), #section-4)');

var projects = [
  {
    name: "post 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    'featured image': "sprites/img-placeholder.png",
    technologies: ["html","Ruby on rails", "css"],
    'link to live version': "#",
    'link to source': "#"
  },
  {
    name: "post 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    'featured image': "sprites/img-placeholder.png",
    technologies: ["html","Ruby on rails", "css"],
    'link to live version': "#",
    'link to source': "#"
  }
];
function displayMenu() {
  btn.classList.add('hidden');
  content.forEach((e) => e.classList.add('hidden'));
  menuVar.forEach((e) => e.classList.remove('hidden'));
  navVar.style.justifyContent = 'center';
  navVar.style.textAlign = 'end';
  document.querySelectorAll('.menu-flex').forEach((e) => { e.style.gap = '200px'; });
  quitbtn.addEventListener('click', quitMenu);
  menuLinks.forEach((e) => e.addEventListener('click', quitMenu));
}

function quitMenu() {
  quitbtn.classList.add('hidden');
  menuVar.forEach((e) => e.classList.add('hidden'));
  content.forEach((e) => e.classList.remove('hidden'));
  navVar.removeAttribute('style');
  aTags.forEach((e) => e.removeAttribute('style'));
}

function displayDetails() {
  contentDetails.forEach((e) => e.classList.add('hidden'));
  document.getElementById('section-2').style.display = 'none';
  document.getElementById('section-4').classList.add('blur-bg');
}

btnDetails[0].addEventListener('click', displayDetails);
btn.addEventListener('click', displayMenu);


