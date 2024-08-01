const board = document.querySelector('#board');
const cells = Array(9).fill(null);
const winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let currentUser = 'X';

// Function to create and render board cells
function createBoardCells() {

    cells.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'board_btn'); 
        cell.dataset.id = index; 

        // Add event listener to each cell
        cell.addEventListener('click', handleClick);

        // Append cell to the board
        board.appendChild(cell);
    });
}

// Event handler function
function handleClick(event) {
    const cell = event.target;
    const cellIndex = cell.dataset.id; 

    // if (cell.innerHTML === '' && !checkWinner()) {
    if (cell.innerHTML === '') {
        cell.innerHTML = currentUser; // Set the cell content
        cells[cellIndex] = currentUser; // Update cells array

        // Check for winner or draw
        if (checkWinner()) {
            alert(`${currentUser} wins!`);
        } else if (cells.every(cell => cell !== null)) {
            alert('It\'s a draw!');
        }

        // Switch user turn
        currentUser = currentUser === 'X' ? 'O' : 'X';
    }
}

// Function to check for a winner
function checkWinner() {
    return winnerPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c];
    });
}

// Initialize the board
createBoardCells();
