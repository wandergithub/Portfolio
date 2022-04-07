const form = document.querySelector('form');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  if (email.value == email.value.toLowerCase()) {
    form.submit();
        console.log ('works!!!')
} else {
    event.preventDefault();
    //mesage
}

});
