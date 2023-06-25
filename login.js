//Contenedor del login
const showLogin = document.querySelector('#showLogin');
const loginContainer = document.querySelector('#loginContainer');
const closeLogin = document.querySelector('.login__icon');
//inputs del login
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');


//funciones
function showLoginContainer(){
    loginContainer.classList.replace('inactive', 'login-container');
}

function closeLoginContainer(){
    loginContainer.classList.replace('login-container', 'inactive');
    inputEmail.value = "";
    inputPassword.value = "";
}

//Eventos
showLogin.addEventListener('click', showLoginContainer);
closeLogin.addEventListener('click', closeLoginContainer);