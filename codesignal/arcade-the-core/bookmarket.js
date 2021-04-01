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

function htmlEndTagByStartTag(startTag) {
  let tag;
  for (let i = 0; i < startTag.length; i++) {
    if (startTag[i] === ' ' || startTag[i] === '>') {
      tag = startTag.substring(1, i);
      break;
    }
  }
  return `</${tag}>`;
}

function isMAC48Address(inputString) {
  if (inputString.length !== 17) {
    return false;
  }
  for (let i = 0; i < inputString.length; i++) {
    if ((i + 1) % 3 === 0) {
      if (inputString[i] !== '-') {
        return false;
      }
    } else {
      const regex = /[A-F0-9]/;
      if (!regex.test(inputString[i])) {
        return false;
      }
    }
  }
  return true;
}
