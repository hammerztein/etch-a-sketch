// DOM Variables
const gridContainer = document.querySelector('.grid-container');
const gridInput = document.querySelector('#grid-size');
const colorInput = document.querySelector('#color-picker');
const rainbowInput = document.querySelector('#rainbow-colors');
const drakeningInput = document.querySelector('#darkening');

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
	const size = event.target.value;

	// Clear grid container
	gridContainer.innerHTML = '';

	// Create column
	for (let i = 1; i <= size; i++) {
		const column = document.createElement('div');
		column.className = 'column';
		for (let j = 1; j <= size; j++) {
			const row = document.createElement('div');
			row.className = 'row';
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
	// If rainbow mode not enabled proceed with picked color
	if (rainbowMode) {
		// Clear currentColor
		currentColor = '#';
		// Generate random hexadecimal color value
		for (let i = 1; i <= 6; i++) {
			currentColor += generateRandomHexValue(hexValues.length);
		}
	} else {
		currentColor = colorInput.value;
	}
	// Apply background color
	element.style.backgroundColor = `${currentColor}`;
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
}

// Toggle darkening mode ON/OFF
function toggleDarkening() {
	darkeningMode = toggleMode(darkeningMode);
}

// Event listeners
gridInput.addEventListener('change', (e) => drawGrid(e));

gridContainer.addEventListener('mouseover', (e) => colorElement(e));

rainbowInput.addEventListener('change', toggleRainbow);

drakeningInput.addEventListener('change', toggleDarkening);
