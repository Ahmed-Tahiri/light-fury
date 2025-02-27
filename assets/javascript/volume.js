let slider = document.querySelector('#volumeSlider');
let speakerIcon = document.querySelector('.speakerIcon');


if (slider.value <= 50) {
    speakerIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
} else if (slider.value > 50 && slider.value <= 100) {
    speakerIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
}

slider.addEventListener('input', () => {

    if (slider.value <= 50) {
        speakerIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
    } else if (slider.value > 50 && slider.value <= 100) {
        speakerIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    }

});