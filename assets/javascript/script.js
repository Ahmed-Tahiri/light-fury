let path = window.location.pathname;
console.log(path)
if (path.includes('settings.html') || path.includes('premium.html')) {
    let header = document.querySelector('.header');
    header.style.backgroundColor = '#272728'

};
let copyRight = document.querySelector('.copyrightText');
let currentYear = new Date().getFullYear();
copyRight.innerHTML = `&copy;${currentYear}<br/>Lightfury`;


let displayAllLanBtn = document.getElementsByClassName(`selectLan`)[0];
let showAllLanTxt = document.getElementsByClassName("selectedLan")[0];
let LanOptions = document.querySelector(`.Lanoptions`);
let Lans = document.querySelectorAll(`.Lanoptions > li`);
displayAllLanBtn.addEventListener("click", () => {
    LanOptions.classList.toggle("show");
});

Lans.forEach((lan) => {
    lan.addEventListener('click', (e) => {
        showAllLanTxt.innerHTML = e.target.innerHTML;
        LanOptions.classList.toggle("show");
    })
});


