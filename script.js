const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const colorBox = document.querySelector('.color-box');

function updateColor() {
    const red = parseInt(redInput.value);
    const green = parseInt(greenInput.value);
    const blue = parseInt(blueInput.value);

    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);

updateColor(); // Set initial color
