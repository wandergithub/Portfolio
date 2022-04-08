const inputs = document.querySelectorAll('.input-box');

function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function loadUserData() {
  if (storageAvailable('localStorage')) { // Check if storage is abailable
    if(localStorage.length === 0) {
      saveUserData();
    }else{
      inputs[0].value = localStorage.getItem('name');
      inputs[1].value = localStorage.getItem('email');
      inputs[2].value = localStorage.getItem('msg');
    }
  }
  else {
    // Too bad, no localStorage for us
  }  
}

function saveUserData() {
  localStorage.setItem('name', inputs[0].value);
  localStorage.setItem('email', inputs[1].value);
  localStorage.setItem('msg', inputs[2].value);
}
inputs.forEach(input => input.addEventListener('input', saveUserData));
loadUserData();