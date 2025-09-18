let displayAllBtn = document.getElementsByClassName(`selectDiv`)[0];
let languageOptions = document.querySelector(`.language_options`);
let language = document.querySelectorAll(`.language_options > li > p`);
let lanTicks = document.querySelectorAll(`.lanTick`);

displayAllBtn.addEventListener("click", () => {
    languageOptions.classList.toggle("show");
});

language.forEach((lan) => {
    lan.addEventListener('click', (e) => {
        lanTicks.forEach(tick => tick.style.display = 'none');
        let circleTick = e.target.nextElementSibling;
        circleTick.style.display = 'block';
        displayAllBtn.innerHTML = ` <span class="selected">${e.target.innerHTML}</span>
                                 <div class="caret"><i class="fa-solid fa-chevron-down"></i></div>`;
        languageOptions.classList.toggle("show");
    });
});

let displayAllFPSBtn = document.getElementsByClassName(`selectFPS`)[0];
let showAllFPS = document.getElementsByClassName("selectedFPS")[0];
let FPSOptions = document.querySelector(`.FPS_options`);
let FPS = document.querySelectorAll(`.FPS_options > li > p`);
let fpsTicks = document.querySelectorAll(`.fpsTick`);

displayAllFPSBtn.addEventListener("click", () => {
    FPSOptions.classList.toggle("show");
});

FPS.forEach((lan) => {
    lan.addEventListener('click', (e) => {
        fpsTicks.forEach(tick => tick.style.display = 'none');
        let circleTick = e.target.nextElementSibling;
        circleTick.style.display = 'block';
        displayAllFPSBtn.innerHTML = `<span class="selectedFPS">${e.target.innerHTML}</span>
                                            <div class="caret"><i class="fa-solid fa-chevron-down"></i></div>`;
        FPSOptions.classList.toggle("show");
    })
});