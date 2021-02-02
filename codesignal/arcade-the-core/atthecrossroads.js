function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  var item1 = [value1, weight1];
  var item2 = [value2, weight2];
  if (item1[1] + item2[1] <= maxW) {
    return item1[0] + item2[0];
  } else if (item1[1] > maxW && item2[1] > maxW) {
    return 0;
  }
  var mostVal;
  var leastVal;
  if (item1[0] > item2[0]) {
    mostVal = item1;
    leastVal = item2;
  } else {
    mostVal = item2;
    leastVal = item1;
  }
  if (mostVal[1] <= maxW) {
    return mostVal[0];
  } else {
    return leastVal[0];
  }
}

function extraNumber(a, b, c) {
  if (a === b) {
    return c;
  } else {
    return a === c ? b : a;
  }
}

function tennisSet(score1, score2) {
  if (score1 > 7 || score2 > 7) {
    return false;
  }
  const sum = score1 + score2;
  if (score1 === 7 || score2 === 7) {
    if (sum < 14 && sum > 11) {
      return true;
    }
    return false;
  }
  if (score1 === 6 || score2 === 6) {
    if (sum < 11) {
      return true;
    }
    return false;
  }
  return false;
}

function willYou(young, beautiful, loved) {
  return (((young && beautiful) && !loved) || ((!young || !beautiful) && loved))
}

function metroCard(l) {
  return l !== 31 ? [31] : [28, 30, 31];
}
