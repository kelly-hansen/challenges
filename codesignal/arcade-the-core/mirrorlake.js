// With nested for loops (timeout error)

// function stringsConstruction(a, b) {
//   let arrB = b.split('');
//   let count = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < arrB.length; j++) {
//       if (a[i] === arrB[j]) {
//         arrB.splice(j, 1);
//         if (i === a.length - 1) {
//           count++;
//           i = -1;
//         }
//         break;
//       }
//       if (j === arrB.length - 1) {
//         return count;
//       }
//     }
//   }
//   return count;
// }

function stringsConstruction(a, b) {
  const aObj = {};
  for (let i = 0; i < a.length; i++) {
    const char = a[i];
    if (aObj[char] === undefined) {
      aObj[char] = 1;
    } else {
      aObj[char]++;
    }
  }
  const bObj = {};
  for (let i = 0; i < b.length; i++) {
    const char = b[i];
    if (bObj[char] === undefined) {
      bObj[char] = 1;
    } else {
      bObj[char]++;
    }
  }
  const charCounts = [];
  for (const char in aObj) {
    if (!bObj[char]) {
      return 0;
    } else {
      charCounts.push(Math.floor(bObj[char] / aObj[char]));
    }
  }
  return Math.min(...charCounts);
}

function isSubstitutionCipher(string1, string2) {
  const letterIndexes = {};
  for (let i = 0; i < string1.length; i++) {
    if (!letterIndexes[string1[i]]) {
      letterIndexes[string1[i]] = [];
    }
    letterIndexes[string1[i]].push(i);
  }
  console.log(letterIndexes);
  const lettersArr1 = [];
  const lettersArr2 = [];
  for (const letter in letterIndexes) {
    const currentLetter = string2[letterIndexes[letter][0]];
    for (let i = 1; i < letterIndexes[letter].length; i++) {
      if (string2[letterIndexes[letter][i]] !== currentLetter) {
        return false;
      }
    }
    for (let i = 0; i < lettersArr1.length; i++) {
      if (lettersArr1[i] === letter || lettersArr2[i] === currentLetter) {
        return false;
      }
    }
    lettersArr1.push(letter);
    lettersArr2.push(currentLetter);
  }
  return true;
}

function createAnagram(s, t) {
  t = t.split('');
  for (let i = 0; i < s.length; i++) {
    const ind = t.indexOf(s[i]);
    if (ind !== -1) {
      t.splice(ind, 1);
    }
  }
  return t.length;
}

function constructSquare(s) {

  function structureString(arr) {
    let used = [];
    let structure = [];
    for (let i = 0; i < arr.length; i++) {
      if (used.indexOf(arr[i]) === -1) {
        used.push(arr[i]);
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] === arr[i]) {
            count++;
          }
        }
        structure.push(count);
      }
    }
    return structure;
  }

  const sStructure = structureString(s.split('')).sort();

  let largest = '';
  for (let i = 0; i < s.length; i++) {
    largest += 9;
  }
  largest = parseInt(largest, 10);

  let sqrt = 1;
  while (sqrt * sqrt <= largest) {
    sqrt++;
  }
  sqrt--;

  while (sqrt > 0) {
    let num = sqrt * sqrt;
    if (num.toString().length < s.length) {
      return -1;
    }
    let numStructure = structureString(num.toString().split('')).sort();
    for (let i = 0; i < numStructure.length; i++) {
      if (numStructure[i] !== sStructure[i]) {
        break;
      }
      if (i === numStructure.length - 1) {
        return num;
      }
    }

    sqrt--;
  }
  return -1;
}

function numbersGrouping(a) {
  a = a.sort((a, b) => a - b);
  console.log(a);
  let groups = 0;
  let groupMax = 10000;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= groupMax - 9999) {
      while (a[i] > groupMax) {
        groupMax += 10000;
      }
      groups++;
      groupMax += 10000;
    }
  }
  return groups + a.length;
}

function differentSquares(m) {
  let result = [];
  for (let i = 0; i < m.length - 1; i++) {
    for (let j = 0; j < m[0].length - 1; j++) {
      const square = [m[i][j], m[i][j + 1], m[i + 1][j], m[i + 1][j + 1]];
      let match = false;
      for (let k = 0; k < result.length; k++) {
        for (let l = 0; l < square.length; l++) {
          if (square[l] !== result[k][l]) {
            break;
          }
          if (l === square.length - 1) {
            match = true;
          }
        }
        if (match) {
          break;
        }
      }
      if (!match) {
        result.push(square);
      }
    }
  }
  return result.length;
}
