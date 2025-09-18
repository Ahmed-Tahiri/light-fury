let musicSlider = document.querySelector('#musicSlider');
let totalSongTime = document.querySelector('#totalSongTime').innerHTML;
let currentSongTime = document.querySelector('#currentSongTime');
function subtractPercentageFromTime(timeStr, percentage) {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    const reducedSeconds = Math.round(totalSeconds * (1 - percentage / 100));
    const newMinutes = Math.floor(reducedSeconds / 60);
    const newSeconds = reducedSeconds % 60;
    const formattedTime = `${newMinutes}:${newSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
}
function updateSliderStyle() {
    let value = musicSlider.value;
    let percentage = (value / musicSlider.max) * 100;
    musicSlider.style.background = `linear-gradient(to right, #b824b5 ${percentage}%, #444 ${percentage}%)`;
    const newTime = subtractPercentageFromTime(totalSongTime, percentage);
    currentSongTime.innerHTML = `-${newTime}`;
}
musicSlider.addEventListener('input', updateSliderStyle);
updateSliderStyle();
let musicController = document.querySelector('.controlButtons');
let playPauseBtn = document.querySelector('#playPauseBtn');
playPauseBtn.addEventListener('click', () => {
    if (playPauseBtn.innerHTML === `<i class="fa-solid fa-pause"></i>`) { playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>` } else if (playPauseBtn.innerHTML === `<i class="fa-solid fa-play"></i>`) { playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>` }
})
musicController.style.display = 'flex';