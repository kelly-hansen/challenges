'use strict';

function takeValueAtIndex(stack, index) {
    for (let id = 0; id < index; id++) {
        const current = stack.pop();
        if (current === undefined) {
            return undefined;
        }
    }
    return stack.pop();
}

module.exports = exports = takeValueAtIndex;
