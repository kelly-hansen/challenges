'use strict';

function takeBottom(stack) {
    let prevValue;
    while (stack.peek() !== undefined) {
        prevValue = stack.pop();
    }
    return prevValue;
}

module.exports = exports = takeBottom;
