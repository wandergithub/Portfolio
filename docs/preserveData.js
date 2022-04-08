const userName = document.getElementById('name');

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

function loadUserData(params) {
  if (storageAvailable('localStorage')) { // Check if storage is abailable
    if(!localStorage.getItem('name')) {//Check if we have an input abailable
      saveUserData();
    }else{
      userName.value = localStorage.getItem('name');
    }
  }
  else {
    // Too bad, no localStorage for us
  }  
}

function saveUserData(params) {
  localStorage.setItem('name', userName.value);
}
userName.addEventListener('input', saveUserData);
loadUserData();