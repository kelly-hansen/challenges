'use strict';

function find(list, searchValue) {
    if (!list) {
        return null;
    }
    let current = list;
    while (current !== null) {
        if (current.data === searchValue) {
            return current;
        }
        current = current.next;
    }
    return null;
}

module.exports = exports = find;
