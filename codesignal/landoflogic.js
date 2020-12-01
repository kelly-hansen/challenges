function longestWord(text) {
  var regex = /[^A-Za-z]/;
  var words = text.split(regex);
  var long = 0;
  var result;
  for (var i = words.length - 1; i >= 0; i--) {
    if (regex.test(words[i][0])) {
      words.splice(i, 1);
    } else if (words[i].length > long) {
      long = words[i].length;
      result = words[i];
    }
  }
  return result;
}

function validTime(time) {
  let hour = parseInt(time.slice(0, 2));
  let min = parseInt(time.slice(3));
  return (hour < 24 && min < 60);
}

function sumUpNumbers(inputString) {
  const inputArr = inputString.split(/\D/);
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i]) {
      result += parseInt(inputArr[i]);
    }
  }
  return result;
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function differentSquares(matrix) {
  const uniqueArr = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let x = 0; x < matrix[0].length - 1; x++) {
      const test = [];
      test.push(matrix[i][x], matrix[i][x + 1], matrix[i + 1][x], matrix[i + 1][x + 1]);
      let isUnique = true;
      for (let y = 0; y < uniqueArr.length; y++) {
        if (arraysEqual(test, uniqueArr[y])) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueArr.push(test);
      }
    }
  }
  return uniqueArr.length;
}

function digitsProduct(product) {
  for (let i = 1; i < 10000; i++) {
    const numArr = i.toString().split('');
    let currentProd = parseInt(numArr[0]);
    for (let x = 1; x < numArr.length; x++) {
      currentProd *= parseInt(numArr[x]);
    }
    if (currentProd === product) {
      return i;
    }
  }
  return -1;
}
