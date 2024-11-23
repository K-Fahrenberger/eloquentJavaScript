let tileSize = 4;

let board = "";

for (let x = 0; x < tileSize; x++) {
  for (let y = 0; y < tileSize; y++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
