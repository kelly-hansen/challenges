// Timeout

function stringsConstruction(a, b) {
  let arrB = b.split('');
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (a[i] === arrB[j]) {
        arrB.splice(j, 1);
        if (i === a.length - 1) {
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
