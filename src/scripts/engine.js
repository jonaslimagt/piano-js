const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/audio/a.wav");

const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.play();
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (event) => {
    try {
        playTune(event.key);
    } catch (error) {}
});