function encloseInBrackets(inputString) {
  return `(${inputString})`;
}

function properNounCorrection(noun) {
  return noun[0].toUpperCase() + noun.substring(1).toLowerCase();
}
