const x = window.matchMedia('(min-width: 768px)');
// Call listener function at run time
// Gets Document elements reference
const btn = document.querySelector('#hamburguer');
const menuVar = document.querySelectorAll('.menu-var, #nav-bar');
const content = document.body.querySelectorAll('*:not(.menu-var *,#menu-v)');
const quitbtn = document.querySelector('#quitbtn');
const menuLinks = document.querySelectorAll('div .menu-flex a ');
const navVar = document.getElementById('nav-bar');
const aTags = document.querySelectorAll('.menu-flex');
const btnDetails = document.querySelectorAll('.btnDetails');
const contentDetails = document.body.querySelectorAll('*:not(#section-4 article:nth-child(1) *,#section-4 article:nth-child(1), #section-4,#menu-v *)');
const header3 = document.querySelector('#section-4 > article h3');
const imgPreview = document.querySelector('#section-4 article img');
const textPreview = document.querySelector('#section-4 > article p');
const listOfTechnologies = document.querySelector('#section-4 > article ul');
const div = document.createElement('div');
// Store cards Project individual info
const projects = [
  {
    name: 'Get Inspired ||web project',
    description: 'This web project gives to the user a compilation of resources about programmers and their accomplishments. If you are looking for successful developers, legends on the industry to look up to, search for inspiration, or simply admire a good software career path and work this is the right web page.',
    'featured image': 'https://raw.githubusercontent.com/wandergithub/get-inspired/master/app_screenshots.png',
    technologies: ['html', 'JavaScript', 'css'],
    'link to live version': 'https://wandergithub.github.io/get-inspired/',
    'link to source': 'https://github.com/wandergithub/get-inspired',
  },
  {
    name: 'API Based Web App',
    description: 'This collaborative JavaScript project is a personalized web application with the help of an external API. we are using two different APIs to have a complete working web app. We are using one API to retrieve all data for the the artist track, albums and title, and another API to store all user interactions.',
    'featured image': 'https://github.com/idungstanley/API-based-webAPP/raw/dev/screenshot.png',
    technologies: ['Javascript', 'iTunes Search API', 'Involvement API'],
    'link to live version': 'https://idungstanley.github.io/API-based-webAPP/',
    'link to source': 'https://github.com/idungstanley/API-based-webAPP',
  },
  {
    name: 'post 3',
    description: "Description text 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    'featured image': './sprites/projectPreview.svg',
    technologies: ['python', 'Ruby on rails', 'Javascript'],
    'link to live version': 'https://wandergithub.github.io/project-media/',
    'link to source': 'https://github.com/wandergithub/project-media',
  },
  {
    name: 'post 4',
    description: "Description text 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    'featured image': './sprites/projectPreview.svg',
    technologies: ['html', 'Ruby on rails', 'css'],
    'link to live version': 'https://wandergithub.github.io/tribute-page/',
    'link to source': 'https://github.com/wandergithub/tribute-page',
  },
  {
    name: 'Multi-Post Storie',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    'featured image': './sprites/img-placeholder.png',
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://wandergithub.github.io/project-media/',
    'link to source': 'https://github.com/wandergithub/project-media',
  },
];
// Quit the Menu and re-display content
function quitMenu() {
  quitbtn.classList.add('hidden');
  menuVar.forEach((e) => e.classList.add('hidden'));
  content.forEach((e) => e.classList.remove('hidden'));
  navVar.removeAttribute('style');
  aTags.forEach((e) => e.removeAttribute('style'));
}
// Displays Menu bar
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
// Set project content to te card
function generatePost(ProjectNum, link, link2) {
  // Set header
  header3.textContent = projects[ProjectNum].name;
  // Set image preview
  imgPreview.setAttribute('src', projects[ProjectNum]['featured image']);
  // Set text content
  textPreview.textContent = projects[ProjectNum].description;
  // Set list of tools used
  const array = projects[ProjectNum].technologies;
  for (let index = 0; index < array.length; index += 1) {
    const element = document.createElement('li');
    element.textContent = array[index];
    listOfTechnologies.appendChild(element);
  }
  // Set buttons links
  link.setAttribute('href', projects[ProjectNum]['link to live version']);
  link.setAttribute('target', '_blank');
  link2.setAttribute('href', projects[ProjectNum]['link to source']);
  link2.setAttribute('target', '_blank');
}
// Quit the details popup
function quitDetails() {
  document.getElementById('stylesheet').disabled = false;
  btnDetails[0].removeAttribute('style');
  document.querySelectorAll('.positionQBtn, .but, .deco li').forEach((item) => {
    item.remove();
  });
  document.querySelectorAll('*:not(.menu-var *,#menu-v)').forEach((e) => e.classList.remove('hidden'));
  document.getElementById('section-2').removeAttribute('style');
  document.getElementById('section-4').classList.remove('blur-bg');
  document.querySelector('#section-4 > article').classList.remove('articleStyle');
  header3.classList.remove('headerMobile');
  header3.removeAttribute('style');
  imgPreview.removeAttribute('style');
  textPreview.classList.remove('p-style');
  textPreview.removeAttribute('style');
  listOfTechnologies.classList.remove('deco');
  listOfTechnologies.removeAttribute('style');
  document.querySelector('#section-4 > article button').removeAttribute('style');

  generatePost(0, document.querySelector('#section-4 article'), document.querySelector('#section-4 article'));
}
// Creates a quit button on the element passed, with the style and function.
function createQuitBtn(element) {
  const qBtn = document.createElement('img');
  qBtn.setAttribute('src', 'sprites/quitbtn.svg');
  qBtn.classList.add('positionQBtn');
  element.appendChild(qBtn);
  qBtn.addEventListener('click', quitDetails);
  return qBtn;
}
// Creates a button
function createButton(element) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('buton-effects', 'text');
  element.appendChild(button);
  return button;
}
// Create button icons
function createIcon(container) {
  const img = document.createElement('img');
  container.appendChild(img);
  return img;
}

function createAlink(container) {
  const a = document.createElement('a');
  container.appendChild(a);
  return a;
}
// Determine which card was clicked
function cardSelected(event) {
  return event.path[0].id;
}
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('dov').style.flexDirection = 'row';
    document.querySelector('.post > ul').style.width = '302px';
    document.querySelector('.post > ul').style.alignSelf = 'center';
    document.querySelector('.post > p').style.width = '59.4%';
    document.querySelector('.post > p').style.alignSelf = 'center';
    document.querySelector('.post > p').style.lineHeight = '30px';
    document.querySelector('.post > ul').style.marginTop = '60px';
    document.querySelector('.post > ul').style.marginBottom = '30px';
    document.querySelector('.post > h3').style.fontSize = '40px';
  } else {
    document.getElementById('dov').style.flexDirection = 'column';
    document.querySelector('.post > ul').style.width = 'auto';
    document.querySelector('.post > p').style.width = '100%';
    document.querySelector('.post > p').style.lineHeight = '24px';
    document.querySelector('.post > ul').style.marginTop = '34px';
    document.querySelector('.post > ul').style.marginBottom = '10px';
    document.querySelector('.post > h3').style.fontSize = '20px';
  }
}

// Desplays Details of the card Project
function displayDetails(event) {
  const card = cardSelected(event);
  // Non style related
  createQuitBtn(document.querySelector('#section-4 article'));
  // Create a links for buttons
  const link = createAlink(document.querySelector('#section-4 article'));
  const link2 = createAlink(document.querySelector('#section-4 article'));
  // See Live button
  const seeLiveBtn = createButton(link);
  seeLiveBtn.textContent = 'See Live';
  const icon = createIcon(seeLiveBtn);
  icon.setAttribute('src', 'sprites/Icon.svg');
  // See source button
  const seeSourceBtn = createButton(link2);
  seeSourceBtn.textContent = 'See Source';
  const icon2 = createIcon(seeSourceBtn);
  icon2.setAttribute('src', 'sprites/icon2.svg');
  // Delete existing li from ul
  document.querySelectorAll('#section-4 > article ul li').forEach((element) => {
    element.classList.add('hidden');
  });
  // Style related changes
  btnDetails[0].style.display = 'none';
  contentDetails.forEach((e) => e.classList.add('hidden'));
  document.getElementById('section-2').style.display = 'none';
  document.getElementById('section-4').classList.add('blur-bg');
  document.querySelector('#section-4 > article').classList.add('articleStyle');
  header3.classList.add('headerMobile');
  imgPreview.style.order = '2';
  imgPreview.style.marginTop = '24px';
  textPreview.classList.add('p-style');
  listOfTechnologies.classList.add('deco');
  listOfTechnologies.style.gridTemplateColumns = '1fr 1fr 1fr';
  document.querySelector('#section-4 > article button').style.order = '5';
  link.classList.add('link1');
  link2.classList.add('link2');
  seeLiveBtn.classList.add('but');
  seeSourceBtn.classList.add('but');
  seeLiveBtn.style.height = '48px';
  seeSourceBtn.style.height = '48px';
  seeLiveBtn.style.width = '108px';
  seeSourceBtn.style.width = '124px';
  // changes related to each individual card
  switch (card) {
    case 'post-1':
      generatePost(0, link, link2);
      break;
    case 'post-2':
      generatePost(1, link, link2);
      break;
    case 'post-3':
      generatePost(2, link, link2);
      break;
    case 'post-4':
      generatePost(3, link, link2);
      break;
    default:
      generatePost(4, link, link2);
  }
  document.getElementById('stylesheet').disabled = true;
  document.querySelector('#section-4 > article').appendChild(div);
  const ele = document.querySelectorAll('#section-4 > article a');
  ele.forEach((element) => {
    div.appendChild(element);
  });
  div.classList.add('dov');
  div.setAttribute('id', 'dov');
  myFunction(x);
}

// Event listeners
btnDetails.forEach((item) => { item.addEventListener('click', displayDetails); });
btn.addEventListener('click', displayMenu);
x.addListener(myFunction); // Attach listener function on state changes