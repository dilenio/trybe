let piece = 'QUEEN';
let move = '';

switch(piece.toLowerCase()){
  case 'king':
    move = 'one square in any direction';
    break;
  case 'queen':
    move = 'any number of squares vertically, horizontally or diagonally';
    break;
  case 'rook':
    move = 'any number of vacant squares horizontally or vertically';
    break;
  case 'bishop':
    move = 'any number of vacant squares diagonally';
    break;
  case 'knight':
    move = 'the move forms an "L"-shape: two squares vertically and one square horizontally, or two squares horizontally and one square vertically';
    break;
  case 'pawn':
    move = 'forward to the unoccupied square immediately in front of it on the same file';
    break;
  default:
    move = 'Unknown piece';
}

console.log(piece, '->', move)