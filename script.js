// Selectors

const randomBtn = document.querySelector('.random-btn');
const infoBtn = document.querySelector('.info-btn');
const copyBtn = document.querySelector('.copy-btn');
const hInput = document.querySelector('input[name="h-value"]');
const sInput = document.querySelector('input[name="s-value"]');
const lInput = document.querySelector('input[name="l-value"]');
const pElements = document.querySelectorAll('p');
const aElements = document.querySelectorAll('a');

// Event Listeners

randomBtn.addEventListener('click', randomColor);
// infoBtn.addEventListener('click', infoHsl);
copyBtn.addEventListener('click', copyColor);
hInput.addEventListener('change', hUpdate);
sInput.addEventListener('change', sUpdate);
lInput.addEventListener('change', lUpdate);

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
    compColor();
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
    console.log(hInput.value);
    if (hInput.value >= 0 && hInput.value <= 360) {
        document.body.style.background = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
        compColor();
    } else {
        alert('Not valid! Must be a number between 0 and 360.');
    }
}

function sUpdate() {
    console.log(sInput.value);
    if (sInput.value >= 0 && sInput.value <= 100) {
        document.body.style.background = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
        compColor();
    } else {
        alert('Not valid! Must be a number between 0 and 100.');
    }
}

function lUpdate() {
    console.log(lInput.value);
    if (lInput.value >= 0 && lInput.value <= 100) {
        document.body.style.background = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
        compColor();
    } else {
        alert('Not valid! Must be a number between 0 and 100.');
    }
}

function compColor() {
    let bbg = `hsl(${hInput.value}, ${sInput.value}%, ${lInput.value}%)`;
    pElements.forEach((pElement) => {
        pElement.style.color = bbg;
        pElement.style.filter = `invert(100%) hue-rotate(180deg)`;
    });
    aElements.forEach((aElement) => {
        aElement.style.color = bbg;
        aElement.style.filter = `invert(100%) hue-rotate(180deg)`;
    });
}
