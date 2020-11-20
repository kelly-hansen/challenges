function isBeautifulString(s) {
  var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (var i = 0; i < a.length - 1; i++) {
    var c1 = 0;
    var c2 = 0;
    for (var x = 0; x < s.length; x++) {
      if (s[x] === a[i]) {
        c1++;
      } else if (s[x] === a[i + 1]) {
        c2++;
      }
    }
    if (c2 > c1) {
      return false;
    }
  }
  return true;
}
