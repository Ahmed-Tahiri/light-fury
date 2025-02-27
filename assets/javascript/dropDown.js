let displayAllBtn = document.getElementsByClassName(`selectDiv`)[0];
let showAllLanguages = document.getElementsByClassName("selected")[0];
let languageOptions = document.querySelector(`.language_options`);
let language = document.querySelectorAll(`.language_options > li`);
displayAllBtn.addEventListener("click", () => {
    languageOptions.classList.toggle("show");
});

language.forEach((lan) => {
    lan.addEventListener('click', (e) => {
        displayAllBtn.innerHTML = e.target.innerHTML;
        languageOptions.classList.toggle("show");
    })
});
let displayAllFPSBtn = document.getElementsByClassName(`selectFPS`)[0];
let showAllFPS = document.getElementsByClassName("selectedFPS")[0];
let FPSOptions = document.querySelector(`.FPS_options`);
let FPS = document.querySelectorAll(`.FPS_options > li`);

displayAllFPSBtn.addEventListener("click", () => {
    FPSOptions.classList.toggle("show");
});

language.forEach((lan) => {

    lan.addEventListener('click', (e) => {
        displayAllFPSBtn.innerHTML = e.target.innerHTML;
        FPSOptions.classList.toggle("show");
    })
});
