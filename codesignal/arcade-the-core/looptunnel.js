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
