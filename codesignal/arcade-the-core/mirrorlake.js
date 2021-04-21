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
