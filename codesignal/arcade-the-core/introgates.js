function addTwoDigits(n) {
  const numString = n.toString();
  return parseInt(numString[0]) + parseInt(numString[1])
}

function largestNumber(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += '9';
  }
  return parseInt(result);
}

function candies(n, m) {
  return Math.floor(m / n) * n;
}

function seatsInTheater(nCols, nRows, col, row) {
  return (nRows - row) * (nCols - col + 1);
}
