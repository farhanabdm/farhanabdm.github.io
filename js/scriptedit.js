button = document.querySelector('.s-header__menu-toggle');
button.onclick = function() {
    navBar = document.querySelector(".ss-show");
    navBar.classList.toggle("menu-is-open");
    menu = document.querySelector(".s-header__menu-toggle");
    menu.classList.toggle("is-clicked");
    headercont = document.querySelector(".header-cont");
    headercont.classList.toggle("active");
}



