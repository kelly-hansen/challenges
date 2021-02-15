'use strict';

function removeNext(list) {
    if (list && list.next) {
        list.next = list.next.next || null;
    }
}

module.exports = exports = removeNext;
