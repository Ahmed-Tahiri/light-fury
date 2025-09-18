let slider = document.querySelector('#volumeSlider');
let speakerIcon = document.querySelector('.speakerIcon');

function updateSliderStyle() {
    let value = slider.value;
    let percentage = (value / slider.max) * 100;

    if (value <= 50) {
        speakerIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
    } else if (value > 50 && value <= 100) {
        speakerIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    }
    slider.style.background = `linear-gradient(to right, #b824b5 ${percentage}%, #444 ${percentage}%)`;
}

slider.addEventListener('input', updateSliderStyle);
updateSliderStyle();
