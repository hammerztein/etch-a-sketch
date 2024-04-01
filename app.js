// DOM Variables
const gridContainer = document.querySelector('.grid-container');
const gridInput = document.querySelector('#grid-size');
const colorInput = document.querySelector('#color-picker');

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

	// Apply background color
	element.style.backgroundColor = currentColor;
}

// Pick a color
function pickColor(event) {
	// Get current element value
	const elementValue = event.target.value;

	// Set currentColor to the new value
	currentColor = elementValue;
}

// Generate random hexadecimal value
function generateRandomHexValue(maxNumber) {
	let randomNumber = Math.floor(Math.random() * maxNumber);
	return hexValues[randomNumber];
}

// Event listeners
gridInput.addEventListener('change', (e) => drawGrid(e));

gridContainer.addEventListener('mouseover', (e) => colorElement(e));

colorInput.addEventListener('change', pickColor);
