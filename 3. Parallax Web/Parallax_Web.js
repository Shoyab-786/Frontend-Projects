burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navleft = document.querySelector('.nav-left')
navright = document.querySelector('.nav-right')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle("h-nav");
    navleft.classList.toggle("v-class");
    navright.classList.toggle("v-class");
})