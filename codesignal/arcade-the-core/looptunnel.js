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
