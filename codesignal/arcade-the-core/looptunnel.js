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

function additionWithoutCarrying(param1, param2) {
  const p1 = param1.toString().split('').reverse().join('');
  const p2 = param2.toString().split('').reverse().join('');
  const longest = Math.max(p1.length, p2.length);
  let result = '';
  for (let i = 0; i < longest; i++) {
    const p1L = p1[i] ? parseInt(p1[i], 10) : 0;
    const p2L = p2[i] ? parseInt(p2[i], 10) : 0;
    let current = (p1L + p2L).toString();
    result = current[current.length - 1] + result;
  }
  return parseInt(result, 10);
}

function appleBoxes(k) {
  let red = 0;
  let yellow = 0;
  for (let i = 1; i <= k; i++) {
    i % 2 ? yellow += i * i : red += i * i;
  }
  return red - yellow;
}

function increaseNumberRoundness(n) {
  const n1 = n.toString();
  let foundNon0 = false;
  for (let i = n1.length - 1; i > 0; i--) {
    if (!foundNon0 && n1[i] !== '0') {
      foundNon0 = true;
    }
    if (foundNon0 && n1[i] === '0') {
      return true;
    }
  }
  return false;
}

function rounders(n) {
  const n1 = n.toString();
  let result = '';
  let roundUp = false;
  for (let i = n1.length - 1; i > 0; i--) {
    let current = parseInt(n1[i]);
    if (roundUp) {
      current++;
    }
    if (current >= 5) {
      roundUp = true;
    } else {
      roundUp = false;
    }
    result = '0' + result;
  }
  if (roundUp) {
    result = parseInt(n1[0], 10) + 1 + result;
  } else {
    result = n1[0] + result;
  }
  return parseInt(result, 10);
}

function candles(candlesNumber, makeNew) {
  let leftovers = candlesNumber;
  let result = candlesNumber;
  candlesNumber = 0;
  while (leftovers >= makeNew) {
    candlesNumber = Math.floor(leftovers / makeNew);
    leftovers -= Math.floor(leftovers / makeNew) * makeNew;
    result += candlesNumber;
    leftovers += candlesNumber;
  }
  return result;
}

function countBlackCells(n, m) {
  let xLineValues = [];
  for (let x = 0; x <= m; x++) {
    xLineValues.push(n - (n / m * x));
  }
}
