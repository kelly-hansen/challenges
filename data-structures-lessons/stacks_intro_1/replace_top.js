'use strict';

function replaceTop(stack, newValue) {
    const oldValue = stack.pop();
    if (oldValue !== undefined) {
        stack.push(newValue);
    }
    return oldValue;
}

module.exports = exports = replaceTop;
