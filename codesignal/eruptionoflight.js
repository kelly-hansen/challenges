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

function findEmailDomain(address) {
  var result = [];
  var at = false;
  for (var i = address.length - 1; i >= 0 && i < address.length; i--) {
    if (at) {
      result.push(address[i]);
      i += 2;
    }
    if (address[i] === '@') {
      at = true;
      i += 2;
    }
  }
  return result.join('');
}

function buildPalindrome(st) {
  if (isPalindrome(st)) {
    return st;
  }
  for (var i = 0; i < st.length; i++) {
    var st2 = st + st.substring(0, i + 1).split('').reverse().join('');
    if (isPalindrome(st2)) {
      return st2;
    }
  }
}

function isPalindrome(st) {
  for (var i = 0; i < st.length; i++) {
    var backCount = st.length - 1 - i;
    if (i >= backCount) {
      return true;
    }
    if (st[i] !== st[backCount]) {
      return false;
    }
  }
}

function electionsWinners(votes, k) {
  var max = Math.max(...votes);
  var result = 0;
  var maxes = 0;
  for (var i = 0; i < votes.length; i++) {
    if (votes[i] + k > max) {
      result++;
    }
    if (votes[i] === max) {
      maxes++;
    }
  }
  if (k === 0 && maxes === 1) {
    return maxes;
  } else if (k === 0) {
    return 0;
  }
  return result;
}
