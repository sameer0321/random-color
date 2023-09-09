let startButton = document.querySelector("#startBtn");
let stopButton = document.querySelector("#stopBtn");


let colorChangeInterval;


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function startColorChange() {
    colorChangeInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
    startButton.disabled = true;
}


function stopColorChange() {
    clearInterval(colorChangeInterval);
    startButton.disabled = false;
}


startButton.addEventListener("click", startColorChange);
stopButton.addEventListener("click", stopColorChange);
 