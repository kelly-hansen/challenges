function isPower(n) {
  if (n === 1) {
    return true;
  }
  for (let a = 2; a < Infinity; a++) {
    for (let b = 2; b < Infinity; b++) {
      if (b === 2 && Math.pow(a, b) > n) {
        return false;
      } else if (Math.pow(a, b) === n) {
        return true;
      } else if (Math.pow(a, b) > n) {
        break;
      }
    }
  }
}
