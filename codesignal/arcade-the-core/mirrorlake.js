// Timeout

function stringsConstruction(a, b) {
  let arrA = a.split('');
  let arrB = b.split('');
  let count = 0;

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        arrB.splice(j, 1);
        if (i === arrA.length - 1) {
          count++;
          i = -1;
        }
        break;
      }
      if (j === arrB.length - 1) {
        return count;
      }
    }
  }
  return count;
}
