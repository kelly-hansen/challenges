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

function chessKnight(cell) {
  var pos = [];
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  for (var i  = 0; i < letters.length; i++) {
    if (cell[0] === letters[i]) {
      pos = [i, parseInt(cell[1] - 1)];
    }
  }
  var count = 0;
  var moves = [[-1, 1], [-2, 2]];
  for (var i = 0; i < 2; i++) {
    var alt = 1;
    if (i === 1) {
      alt = 0;
    }
    for (var x = 0; x < 2; x++) {
      for (var y = 0; y < 2; y++) {
        if (letters[pos[0] + moves[i][x]] && letters[pos[1] + moves[alt][y]]) {
          count++;
        }
      }
    }
  }
  return count;
}

function deleteDigit(n) {
  var max = 0;
  var a = n.toString().split('');
  for (var i = 0; i < a.length; i++) {
    var x = a.slice();
    x.splice(i, 1);
    var y = x.join('');
    if (parseInt(y) > max) {
      max = parseInt(y);
    }
  }
  return max;
}
