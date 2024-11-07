const container = document.getElementById('container');
const newGridBtn = document.getElementById('newGridBtn');

// Function to create the grid with a given size
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = '0';

        // Set hover effect to change color and increase opacity
        square.addEventListener('mouseenter', () => {
            // Randomize color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            // Darken progressively
            let currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity < 1) {
                square.style.opacity = currentOpacity + 0.1;
            }
        });

        container.appendChild(square);
    }
}

// Function to prompt for grid size and recreate grid
function promptNewGrid() {
    let size = parseInt(prompt('Enter new grid size (max 100):'));
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Invalid size. Please enter a number between 1 and 100.');
    } else {
        createGrid(size);
    }
}

// Initial grid setup
createGrid(16);

// Event listener for new grid button
newGridBtn.addEventListener('click', promptNewGrid);
