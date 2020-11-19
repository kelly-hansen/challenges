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
