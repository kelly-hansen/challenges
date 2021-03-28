function encloseInBrackets(inputString) {
  return `(${inputString})`;
}

function properNounCorrection(noun) {
  return noun[0].toUpperCase() + noun.substring(1).toLowerCase();
}

function isTandemRepeat(inputString) {
  if (inputString.length % 2) {
    return false;
  }
  const firstHalf = inputString.substring(inputString.length / 2);
  return firstHalf + firstHalf === inputString;
}

function isCaseInsensitivePalindrome(inputString) {
  const str = inputString.toUpperCase();
  return str === str.split('').reverse().join('');
}
