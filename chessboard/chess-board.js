

function initializeChessboard() {
    const board = document.createElement("div");
    board.classList.add("chessboard");
    document.body.appendChild(board);


    for (let i = 0; i < 64; i++) {
        let row = Math.floor(i / 8) + 1;
        let col = Math.floor(i % 8) + 1;
        const square = document.createElement("div");
        square.id = `square-${row}-${col}`;

        square.classList.add("square");
        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }
        board.appendChild(square);
        square.addEventListener('click', changeSquareColor)
    }
}

function changeSquareColor() {
    const isAlreadySelected = this.classList.contains('selected');
    const currentlySelected = document.querySelector('.square.selected');
    if (currentlySelected) {
        currentlySelected.classList.remove('selected');
    }
    if (!isAlreadySelected) {
        this.classList.add('selected');
    }
}

// Auto-initialize when the DOM is loaded
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeChessboard);
    } else {
        initializeChessboard();
    }
}

// Export for non-browser environments (tests) if applicable
if (typeof module !== 'undefined') {
    module.exports = { initializeChessboard };
}