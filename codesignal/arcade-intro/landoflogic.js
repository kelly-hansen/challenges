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

function isUnique(name, x, arr) {
  for (let i = 0; i < x; i++) {
    if (name === arr[i]) {
      return false;
    }
  }
  return true;
}

function fileNaming(names) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let newName = name;
    let count = 1;
    while (!isUnique(newName, i, names)) {
      newName = name + '(' + count + ')';
      count++;
    }
    names[i] = newName;
  }
  return names;
}

function messageFromBinaryCode(code) {
  let result = '';
  for (let i = 0; i < code.length; i += 8) {
    const codeSnip = code.slice(i, i + 8);
    result += String.fromCharCode(parseInt(codeSnip, 2));
  }
  return result;
}

function createMatrix(n) {
  const result = [];
  for (var i = 0; i < n; i++) {
    const newArr = [];
    for (var x = 0; x < n; x++) {
      newArr.push(null);
    }
    result.push(newArr);
  }
  return result;
}

function findNext(currentInd, currentDir, matrix) {
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const result = {};
  let next = [currentInd[0] + dir[currentDir][0], currentInd[1] + dir[currentDir][1]];
  if (!matrix[next[0]] || matrix[next[0]][next[1]] !== null) {
    if (currentDir < 3) {
      currentDir++;
    } else {
      currentDir = 0;
    }
    next = [currentInd[0] + dir[currentDir][0], currentInd[1] + dir[currentDir][1]];
  }
  console.log(next);
  result.newInd = next;
  result.newDir = currentDir;
  return result;
}

function spiralNumbers(n) {
  const result =  createMatrix(n);
  result[0][0] = 1;
  let dir = 0;
  let currentInd = [0, 0];
  for (let i = 2; i <= n * n; i++) {
    const nextObj = findNext(currentInd, dir, result);
    dir = nextObj.newDir;
    currentInd = nextObj.newInd;
    result[currentInd[0]][currentInd[1]] = i;
  }
  return result;
}

function checkSubGrids(grid, oneToNine) {
  let x = 0;
  let y = 0;
  for (let q = 0; q < 3; q++) {
    for (let w = 0; w < 3; w++) {
      console.log(x, y);
      let currentSubGrid = [];
      for (let i = y; i < y + 3; i++) {
        for (let j = x; j < x + 3; j++) {
          currentSubGrid.push(grid[i][j]);
        }
      }
      currentSubGrid.sort((a, b) => a - b);
      console.log(currentSubGrid);
      for (let i = 0; i < grid.length; i++) {
        if (currentSubGrid[i] !== oneToNine[i]) {
          return false;
        }
      }
      if (x === 6) {
        x = 0;
      } else {
        x += 3;
      }
    }
    y += 3;
  }
  return true;
}

function sudoku(grid) {
  let oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < grid.length; i++) {
    const currentRow = grid[i].slice().sort((a, b) => a - b);
    let currentCol = [];
    for (let x = 0; x < grid.length; x++) {
      currentCol.push(grid[x][i]);
    }
    currentCol.sort((a, b) => a - b);
    for (let x = 0; x < grid.length; x++) {
      if (currentRow[x] !== oneToNine[x] || currentCol[x] !== oneToNine[x]) {
        return false;
      }
    }
  }
  return checkSubGrids(grid, oneToNine);
}
