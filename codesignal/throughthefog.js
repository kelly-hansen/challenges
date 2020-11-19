function circleOfNumbers(n, firstNumber) {
    var result =  firstNumber + n / 2;
    if (result >= n) {
        result -= n;
    }
    return result;
}
