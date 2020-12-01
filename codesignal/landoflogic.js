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
