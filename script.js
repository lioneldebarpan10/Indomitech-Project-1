/*JS START*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let navside = document.querySelector('.navside');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   navside.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
   navside.classList.remove('active');
}

/*JS END*/
