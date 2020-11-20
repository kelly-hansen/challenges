function circleOfNumbers(n, firstNumber) {
    var result =  firstNumber + n / 2;
    if (result >= n) {
        result -= n;
    }
    return result;
}

function depositProfit(deposit, rate, threshold) {
    var years = 0;
    while (deposit < threshold) {
        deposit = deposit * (rate / 100) + deposit;
        years++;
    }
    return years;
}

function absoluteValuesSumMinimization(a) {
    var closestSum;
    var closestIndex = 0;
    for (var i = 0; i < a.length; i++) {
        var currentSum = 0;
        for (var x = 0; x < a.length; x++) {
            currentSum += Math.abs(a[x] - a[i]);
        }
        if (i === 0) {
            closestSum = currentSum;
        } else if (currentSum < closestSum) {
            closestSum = currentSum;
            closestIndex = i;
        }
    }
    return a[closestIndex];
}

function stringsRearrangement(a) {
    for (let i = 0; i < a.length; i++) {
        let remaining = findNext(a[i], a);
        if (remaining.length === 0) return true;
    }
    return false;
}

function findNext(current, a) {
    for (let i = 0; i < a.length; i++) {
        if (differsByOneChar(current, a[i])) {
            let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
            if (remaining.length === 0) return remaining;
        }
    }
    return a;
}

function differsByOneChar(s1, s2) {
    let mismatches = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) mismatches++;
        if (mismatches > 1) break;
    }
    return mismatches === 1;
}
