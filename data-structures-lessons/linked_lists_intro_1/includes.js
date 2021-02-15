'use strict';

function includes(list, searchValue) {
    if (!list) {
        return false;
    }
    let current = list;
    while (current !== null) {
        if (current.data === searchValue) {
            return true;
        }
        current = current.next;
    }
    return false;
}

module.exports = exports = includes;
