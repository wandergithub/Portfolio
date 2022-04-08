const form = document.querySelector('form');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  if (!(email.value == email.value.toLowerCase())) {
    event.preventDefault();
    email.setCustomValidity('Lower case use required');
} else {   
    // form.submit();
    console.log ('works!!!')
}
});

email.addEventListener('change',function (event) {
  email.setCustomValidity('');
});
