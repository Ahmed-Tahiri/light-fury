let showAllBtn = document.getElementsByClassName(`select`)[0];
let showAllText = document.getElementsByClassName("selected")[0];
let dropDownOption = document.getElementsByClassName(`options`)[0];
let options = document.querySelectorAll('.option');
let current = showAllText.innerHTML;
options.forEach((option) => {
    option.addEventListener('click', (e) => {
        showAllText.innerHTML = option.innerHTML;
        dropDownOption.classList.remove('show');
    })
})
showAllBtn.addEventListener("click", (e) => {
    dropDownOption.classList.toggle("show");
    dropDownOption.style.height = '200px';
});

let copyRight = document.querySelector('.copyrightText');
let currentYear = new Date().getFullYear();
copyRight.innerHTML = `&copy;${currentYear}<br/>Unnamed`;