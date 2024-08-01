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
    // Create cell elements
    let cellElements = cells.map((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('board_btn'); // Use classList.add for better readability
        cell.dataset.id = index; // Store index in dataset

        // Add event listener to each cell
        cell.addEventListener('click', handleClick); // Correct event type

        return cell; // Return the cell element
    });

    cellElements.forEach(cell => board.appendChild(cell)); // Append each cell to the board
}

// Event handler function
function handleClick(event) {
    const cell = event.target;
    const cellIndex = cell.dataset.id;

    if (cell.innerHTML === '' && !checkWinner()) {
        cell.innerHTML = currentUser;
        cells[cellIndex] = currentUser; // Update cells array

        // Switch user turn
        currentUser = currentUser === 'X' ? 'O' : 'X';

        if (checkWinner()) {
            alert(`${currentUser === 'X' ? 'O' : 'X'} wins!`);
        } else if (cells.every(cell => cell !== null)) {
            alert('It\'s a draw!');
        }
    }
}

// Function to check for a winner
function checkWinner() {
    return winnerPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
    });
}

// Initialize the board
createBoardCells();
