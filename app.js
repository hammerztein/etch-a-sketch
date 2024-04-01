// DOM Variables
const gridContainer = document.querySelector('.grid-container');
const gridInput = document.querySelector('#grid-size');

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

// Event listeners
gridInput.addEventListener('change', (e) => drawGrid(e));
