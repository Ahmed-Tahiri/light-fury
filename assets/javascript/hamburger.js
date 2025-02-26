let navUl = document.querySelector('.navUl');
let hamBtn = document.querySelector('.hamburger');
let navLinks = document.querySelectorAll('.navUl > li');

hamBtn.addEventListener('click', () => navUl.classList.toggle('flex'));
navLinks.forEach((link) => link.addEventListener('click', () => navUl.classList.toggle('flex')))
