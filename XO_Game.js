// JavaScript code for Tic Tac Toe game

// Initialize variables
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// Function to handle cell click event
function cellClicked(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById(`cell${index + 1}`).innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Function to check if there's a winner
function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      document.getElementById("message").innerText = `${currentPlayer} wins!`;
      return;
    }
  }

  if (!board.includes("")) {
    gameOver = true;
    document.getElementById("message").innerText = "It's a draw!";
  }
}

// Function to reset the game
function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  document.getElementById("message").innerText = "";
  document.querySelectorAll(".cell").forEach(cell => {
    cell.innerText = "";
  });
}
