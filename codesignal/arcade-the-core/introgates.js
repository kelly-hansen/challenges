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

function maxMultiple(divisor, bound) {
return Math.floor(bound / divisor) * divisor;
}

function circleOfNumbers(n, firstNumber) {
  let result = firstNumber + (n / 2);
  if (result > n - 1) {
    result = result - n;
  }
  return result;
}

function lateRide(n) {
  const th = Math.floor(n / 600);
  n = n - (th * 600);
  const h = Math.floor(n / 60);
  n = n - (h * 60);
  const tm = Math.floor(n / 10);
  const m = n - (tm * 10);
  return th + h + tm + m;
}

function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) {
    return 0;
  }
  let result = 1;
  s -= min1;
  for (let i = 2; i <= 10; i++) {
    s -= min2_10;
    if (s < 0) {
      return result;
    }
    result++;
  }
  for (let i = 11; s >= 0; i++) {
    s -= min11;
    if (s < 0) {
      return result;
    }
    result++;
  }
}

function isInfiniteProcess(a, b) {
  return a > b || a % 2 !== b % 2;
}

function arithmeticExpression(a, b, c) {
  return a + b === c || a - b === c || a * b === c || a / b === c;
}

//incomplete
function tennisSet(score1, score2) {
  if (score1 > 7 || score2 > 7) {
    return false;
  }
  return true;
}
