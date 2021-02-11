'use strict';

function take2ndFromTop(stack) {
    const topValue = stack.pop();
    let secondValue;
    if (topValue !== undefined) {
        secondValue = stack.pop();
        stack.push(topValue);
    }
    return secondValue;
}

module.exports = exports = take2ndFromTop;
