// DOM Variables
const gridContainer = document.querySelector('.grid-container');
const gridInput = document.querySelector('#grid-size');
const colorInput = document.querySelector('#color-picker');
const rainbowInput = document.querySelector('#rainbow-colors');
const darkeningInput = document.querySelector('#darkening');
const resetButton = document.querySelector('#reset');

// Global Variables
let currentColor = colorInput.value;
const hexValues = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
];
let rainbowMode = false;
let darkeningMode = false;

// Create grid via flexbox
function drawGrid(event) {
	// Get range value
	const size = gridInput.value;

	// Clear grid container
	gridContainer.innerHTML = '';

	// Create column
	for (let i = 1; i <= size; i++) {
		const column = document.createElement('div');
		column.className = 'column';
		for (let j = 1; j <= size; j++) {
			const row = document.createElement('div');
			row.className = 'row';
			row.setAttribute('data-opacity', 0);
			column.appendChild(row);
		}
		// Append new grid into container
		gridContainer.appendChild(column);
	}
}

// Apply color to elements
function colorElement(event) {
	// Get current element
	const element = event.target;
	// Reset opacity and dataset if mode not active
	if (!darkeningMode) {
		element.dataset.opacity = 0;
		element.style.opacity = 1;
	}
	// If rainbow mode not enabled proceed with picked color
	if (rainbowMode) {
		// Clear currentColor
		currentColor = '#';
		// Generate random hexadecimal color value
		for (let i = 1; i <= 6; i++) {
			currentColor += generateRandomHexValue(hexValues.length);
		}
	} else if (darkeningMode) {
		// Shading logic over 10 iterations
		currentColor = '#000000';
		element.style.opacity = element.dataset.opacity / 10;
		element.style.opacity < 1
			? element.dataset.opacity++
			: element.style.opacity;
	} else {
		// No modes are active - use picked color
		currentColor = colorInput.value;
	}
	// Apply background color
	element.style.backgroundColor = currentColor;
}

// Generate random hexadecimal value
function generateRandomHexValue(maxNumber) {
	let randomNumber = Math.floor(Math.random() * maxNumber);
	return hexValues[randomNumber];
}

// Toggle modes
function toggleMode(modeName) {
	return !modeName;
}

// Toggle rainbow mode ON/OFF
function toggleRainbow() {
	rainbowMode = toggleMode(rainbowMode);
	// Enable only 1 active mode
	if (darkeningMode) {
		darkeningInput.checked = false;
		darkeningMode = toggleMode(darkeningMode);
	}
}

// Toggle darkening mode ON/OFF
function toggleDarkening() {
	darkeningMode = toggleMode(darkeningMode);
	// Enable only 1 active mode
	if (rainbowMode) {
		rainbowInput.checked = false;
		rainbowMode = toggleMode(rainbowMode);
	}
}

// Event listeners
gridInput.addEventListener('change', drawGrid);

gridContainer.addEventListener('mouseover', (e) => {
	// Event triggers mouseover on parent due to padding & border, negate it
	if (e.target === gridContainer) {
		return;
	}
	colorElement(e);
});

rainbowInput.addEventListener('change', toggleRainbow);

darkeningInput.addEventListener('change', toggleDarkening);

resetButton.addEventListener('click', drawGrid);

// Draw initial grid of 16x16
drawGrid();
