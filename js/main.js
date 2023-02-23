// nav__bar responsive
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function(){
    navBar = document.querySelector('.nav__bar');
    navBar.classList.toggle('active');
}