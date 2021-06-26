// Selectors

const randomBtn = document.querySelector('.random-btn');
const infoBtn = document.querySelector('.info-btn');
const copyBtn = document.querySelector('.copy-btn');
const hInput = document.querySelector('#h-input');
const sInput = document.querySelector('#s-input');
const lInput = document.querySelector('#l-input');

// Event Listeners

randomBtn.addEventListener('click', randomColor);
// infoBtn.addEventListener('click', infoHsl);
copyBtn.addEventListener('click', copyColor);

// Functions

window.onload = function () {
    document.querySelector('input[name="h-value"]').value = '';
    document.querySelector('input[name="s-value"]').value = '';
    document.querySelector('input[name="l-value"]').value = '';
};

function randomColor() {
    let hValue = Math.floor(Math.random() * 361).toString();
    let newHValue = document.querySelector('input[name="h-value"]');
    newHValue.value = hValue;
    let sValue = Math.floor(Math.random() * 101).toString();
    let newSValue = document.querySelector('input[name="s-value"]');
    newSValue.value = sValue + '%';
    let lValue = Math.floor(Math.random() * 101).toString();
    let newLValue = document.querySelector('input[name="l-value"]');
    newLValue.value = lValue + '%';
    document.body.style.background = `hsl(${hValue}, ${sValue}%, ${lValue}%)`;
}

function copyColor() {
    let hCopy = document.querySelector('input[name="h-value"]').value;
    let sCopy = document.querySelector('input[name="s-value"]').value;
    let lCopy = document.querySelector('input[name="l-value"]').value;
    hslColorCopy = `hsl(${hCopy} , ${sCopy} , ${lCopy})`;
    let textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.style.display = 'hidden';
    textArea.value = hslColorCopy;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to the clipboard :D');
}
