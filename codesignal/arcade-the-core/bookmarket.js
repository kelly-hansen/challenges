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

function findEmailDomain(address) {
  let domain;
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '@') {
      domain = address.substring(i + 1);
    }
  }
  return domain;
}
