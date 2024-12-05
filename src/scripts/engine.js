const pianoKeys = document.querySelectorAll(".piano-keys .key"), 
volumeSlider = document.querySelector(".volume-slider input"),
keyCheckbox = document.querySelector(".key-check input");

let allKeys = [], audio = new Audio("src/audio/a.wav");

const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    allKeys.push(key.dataset.key);

    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (event) => {
    audio.volume = event.target.value;
}

const showHideKeys = (event) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (event) => {
    if (allKeys.includes(event.key)) playTune(event.key);
}

volumeSlider.addEventListener("input", handleVolume);
keyCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);