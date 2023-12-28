burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_left = document.querySelector('.nav_left')
nav_right = document.querySelector('.nav_right')



burger.addEventListener('click', () => {
    nav_right.classList.toggle('v-class');
    nav_left.classList.toggle('v-class');
    navbar.classList.toggle("h-nav");
})