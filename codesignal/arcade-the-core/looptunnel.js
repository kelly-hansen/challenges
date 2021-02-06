function leastFactorial(n) {
  for (let i = 1; i < Infinity; i++) {
    let f = 1;
    for (let x = i; x >= 1; x--) {
      f = f * x;
    }
    if (f >= n) {
      return f;
    }
  }
}

function countSumOfTwoRepresentations2(n, l, r) {
  let count = 0;
  for (let a = l; a <= r; a++) {
    const b = n - a;
    if (b >= a && b >= l && b <= r) {
      count++;
    }
  }
  return count;
}

function magicalWell(a, b, n) {
  let result = 0;
  while (n > 0) {
    result += a * b;
    a++;
    b++;
    n--;
  }
  return result;
}

function lineUp(commands) {
  let result = 0;
  let lCount = 0;
  let rCount = 0;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'L') {
      lCount++;
    }
    if (commands[i] === 'R') {
      rCount++;
    }
    if ((lCount % 2 === 0 && rCount % 2 === 0) || (lCount % 2 && rCount % 2)) {
      result++;
    }
  }
  return result;
}
