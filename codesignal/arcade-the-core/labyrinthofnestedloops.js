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

function isSumOfConsecutive2(n) {
  let result = 0;
  for (let i = 1; i < n; i++) {
    const consecutive = [i];
    let sum = consecutive.reduce((x, y) => x + y);
    let j = i + 1;
    while (sum <= n) {
      consecutive.push(j);
      sum = consecutive.reduce((x, y) => x + y);
      if (consecutive.length >= 2 && sum === n) {
        result++;
      }
      j++;
    }
  }
  return result;
}
