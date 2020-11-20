function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var height = 0;
  var days = 0;
  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) {
      return days;
    }
    height -= downSpeed;
  }
}

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  var item1 = [value1, weight1];
  var item2 = [value2, weight2];
  if (item1[1] + item2[1] <= maxW) {
    return item1[0] + item2[0];
  } else if (item1[1] > maxW && item2[1] > maxW) {
    return 0;
  }
  var mostVal;
  if (item1[0] > item2[0]) {
    mostVal = item1;
    leastVal = item2;
  } else {
    mostVal = item2;
    leastVal = item1;
  }
  if (mostVal[1] <= maxW) {
    return mostVal[0];
  } else {
    return leastVal[0];
  }
}

function longestDigitsPrefix(inputString) {
  var result = '';
  for (var i = 0; i < inputString.length; i++) {
    var match = inputString[i].match(/\d/);
    if (match) {
      result += inputString[i];
    } else {
      break;
    }
  }
  return result;
}

function digitDegree(n) {
  var nStr = n.toString();
  var count = 0;
  while (nStr.length > 1) {
    var sum = 0;
    for (var i = 0; i < nStr.length; i++) {
      sum += parseInt(nStr[i]);
    }
    nStr = sum.toString();
    count++;
  }
  return count;
}

function bishopAndPawn(bishop, pawn) {
  var letters = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var b;
  var p;
  for (var i = 1; i < letters.length; i++) {
    if (bishop[0] === letters[i]) {
      b = [i, parseInt(bishop[1])];
    }
    if (pawn[0] === letters[i]) {
      p = [i, parseInt(pawn[1])];
    }
  }
  return (Math.abs(b[0] - p[0]) === Math.abs(b[1] - p[1]));
}
