// Selectors

const randomBtn = document.querySelector('.random-btn');
const infoBtn = document.querySelector('.info-btn');
const copyBtn = document.querySelector('.copy-btn');
const hInput = document.querySelector('input[name="h-value"]');
const sInput = document.querySelector('input[name="s-value"]');
const lInput = document.querySelector('input[name="l-value"]');

// Event Listeners

randomBtn.addEventListener('click', randomColor);
// infoBtn.addEventListener('click', infoHsl);
copyBtn.addEventListener('click', copyColor);
hInput.addEventListener('change', hUpdate);
sInput.addEventListener('change', hUpdate);
lInput.addEventListener('change', hUpdate);

// Functions

window.onload = function () {
    hInput.value = 0;
    sInput.value = 0;
    lInput.value = 90;
};

function randomColor() {
    let hValue = Math.floor(Math.random() * 361);
    let newHValue = hInput;
    newHValue.value = hValue;
    let sValue = Math.floor(Math.random() * 101);
    let newSValue = sInput;
    newSValue.value = sValue;
    let lValue = Math.floor(Math.random() * 101);
    let newLValue = lInput;
    newLValue.value = lValue;
    document.body.style.background = `hsl(${hValue}, ${sValue}%, ${lValue}%)`;
}

function copyColor() {
    hslColorCopy = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
    let textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.style.display = 'hidden';
    textArea.value = hslColorCopy;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to the clipboard :D');
}

function hUpdate() {
    if (hInput.value >= 0 && hInput.value <= 360) {
        document.body.style.background = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
    } else {
        alert('Not valid! Must be a number between 0 and 360.');
    }
}

function sUpdate() {
    if (sInput.value >= 0 && sInput.value <= 100) {
        document.body.style.background = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
    } else {
        alert('Not valid! Must be a number between 0 and 360.');
    }
}

function lUpdate() {
    if (lInput.value >= 0 && lInput.value <= 100) {
        document.body.style.background = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
    } else {
        alert('Not valid! Must be a number between 0 and 360.');
    }
}
