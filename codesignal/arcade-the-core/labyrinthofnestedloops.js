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

function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits > 0) {
    numberOfDigits -= current.toString().length;
    if (numberOfDigits >= 0) {
      current++;
    }
  }
  return current - 1;
}

function weakNumbers(n) {
  const divisorsArr = [];
  const weaknessArr = [];
  for (let i = 1; i <= n; i++) {
    let divisors = 1;
    for (let x = 1; x < i; x++) {
      if (!(i % x)) {
        divisors++;
      }
    }
    divisorsArr.push(divisors);
    let currentWeakness = 0;
    for (let x = 0; x < divisorsArr.length; x++) {
      if (divisorsArr[x] > divisors) {
        currentWeakness++;
      }
    }
    weaknessArr.push(currentWeakness);
  }
  const maxWeakness = weaknessArr.reduce((a, b) => Math.max(a, b));
  return [maxWeakness, weaknessArr.filter(x => x === maxWeakness).length];
}

function rectangleRotation(a, b) {
  const aLength = Math.sqrt(Math.pow(a, 2) / 2);
  const bLength = Math.sqrt(Math.pow(b, 2) / 2);
  console.log(aLength, bLength);
  return Math.ceil(aLength) * Math.ceil(bLength) + Math.floor(aLength) * Math.floor(bLength);
}
