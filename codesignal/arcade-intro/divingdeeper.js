function extractEachKth(inputArray, k) {
  var elsToRemove = Math.floor(inputArray.length / k);
  for (var i = elsToRemove; i > 0; i--) {
    inputArray.splice(k * i - 1, 1);
  }
  return inputArray;
}

function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}

function differentSymbolsNaive(s) {
  var uniqueArr = [];
  for (var i = 0; i < s.length; i++) {
    var unique = true;
    for (var x = 0; x < uniqueArr.length; x++) {
      if (s[i] === uniqueArr[x]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      uniqueArr.push(s[i]);
    }
  }
  return uniqueArr.length;
}

function arrayMaxConsecutiveSum(inputArray, k) {
  var maxSum = 0;
  for (var i = 0; i + k - 1 < inputArray.length; i++) {
    var sum = 0;
    for (var x = i; x < i + k; x++) {
      sum += inputArray[x];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
