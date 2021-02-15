'use strict';

function getTail(list) {
    if (!list) {
        return undefined;
    }
    let current = list;
    while (current.next !== null) {
        current = current.next;
    }
    return current.data;
}

module.exports = exports = getTail;
