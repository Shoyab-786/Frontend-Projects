
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
navright = document.querySelector('.nav-right')


burger.addEventListener('click', () => {
    navright.classList.toggle('vi')
    navlist.classList.toggle('vi')
    navbar.classList.toggle('ht')
})