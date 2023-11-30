document.addEventListener('DOMContentLoaded', function () {
        const cells = document.querySelectorAll('td');
        let currentPlayer = 'X';
        let gameOver = false;

        cells.forEach((cell) => {
        cell.addEventListener('click', function () {
        if (gameOver || cell.textContent) return;

        cell.textContent = currentPlayer;
        if (checkWin()) {
        alert(currentPlayer + " wins!");
        gameOver = true;
        } else if ([...cells].every((cell) => cell.textContent)) {
        alert('It\'s a draw!');
        gameOver = true;
        } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        });
        });

        function checkWin() {
        const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

        return winningCombos.some((combo) => {
        const [a, b, c] = combo;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
        }
        });
