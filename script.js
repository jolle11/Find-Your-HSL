// Selectors

const randomBtn = document.querySelector('.random-btn');
const copyBtn = document.querySelector('.copy-btn');
const hInput = document.querySelector('input[name="h-value"]');
const sInput = document.querySelector('input[name="s-value"]');
const lInput = document.querySelector('input[name="l-value"]');
const pElements = document.querySelectorAll('p');
const aElements = document.querySelectorAll('a');

// Event Listeners

randomBtn.addEventListener('click', randomColor);
copyBtn.addEventListener('click', copyColor);
hInput.addEventListener('change', hUpdate);
sInput.addEventListener('change', sUpdate);
lInput.addEventListener('change', lUpdate);

// Functions

// Function to make sure every time we load or refresh the page,
// all three values are reset to the predefined ones.

window.onload = function () {
    hInput.value = 0;
    sInput.value = 0;
    lInput.value = 90;
};

// The randomColor function makes the random button work,
// applying a random number from 0 to 360 for the HUE,
// 0 to 100 for the saturation and 0 to 100 for the lightness.

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

// The copyColor function copies the color displayed in the correct format >> hsl(XXX, XXX%, XXX%)
// Ready to paste in your editor.

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

// The next 3 functions (hUpdate, sUpdate and lUpdate) work the same way.
// The color is updated when you modify one of the values separately.
// It also gives you an alert if the value is not correct for each field.

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

// The compColor function modifies the color of the icons and letters on the screen
// with the complementary color of the generated for the background.

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
