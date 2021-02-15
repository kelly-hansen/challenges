'use strict';

function removeTail(list) {
    if (!list || !list.next) {
        return null;
    }
    let current = list;
    while (current.next.next !== null) {
        current = current.next;
    }
    current.next = null;
    return list;
}

module.exports = exports = removeTail;
