function isDigit(s) {
  var regex = /\d/;
  return regex.test(s);
}

function lineEncoding(s) {
  var div = [];
  var lastIndex = 0;
  for (var i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      div.push(s.substring(lastIndex, i));
      lastIndex = i;
    }
    if (i === s.length - 1) {
      div.push(s.substring(lastIndex));
    }
  }
  console.log(div);
  var result = '';
  for (var i = 0; i < div.length; i++) {
    if (div[i].length > 1) {
      result += '' + div[i].length + div[i][0];
    } else {
      result += div[i][0];
    }
  }
  return result;
}
