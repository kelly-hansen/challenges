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

function squareDigitsSequence(a0) {
  let result = 1;
  const used = [a0];

  function squaredSum(num) {
    let digitsStrings = num.toString().split('');
    let digitsArr = [];
    digitsStrings.forEach(x => digitsArr.push(Math.pow(parseInt(x, 10), 2)));
    return digitsArr.reduce((x, y) => x + y);
  }

  let sum = squaredSum(a0);
  let finished = false;
  while (!finished) {
    result++;
    for (let i = 0; i < used.length; i++) {
      if (used[i] === sum) {
        finished = true;
        break;
      }
    }
    used.push(sum);
    sum = squaredSum(sum);
  }
  return result;
}