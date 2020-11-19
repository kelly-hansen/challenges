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
