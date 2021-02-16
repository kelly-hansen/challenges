'use strict';
const { LinkedListNode } = require('../../structures');

class BulkWordEditor {
    constructor(message) {
        const messageArray = message.split(' ');
        this.messageList = new LinkedListNode(messageArray[0]);
        let currentListItem = this.messageList;
        for (let id = 1; id < messageArray.length; id++) {
            currentListItem.next = new LinkedListNode(messageArray[id]);
            currentListItem = currentListItem.next;
        }
    }

    render() {
        let message = this.messageList.data;
        let current = this.messageList;
        while (current.next !== null) {
            current = current.next;
            message += ' ' + current.data;
        }
        return message;
    }

    count(word) {
        let count = 0;
        let current = this.messageList;
        while (current !== null) {
            if (current.data.toLowerCase() === word.toLowerCase()) {
                count++;
            }
            current = current.next;
        }
        return count;
    }

    replace(targetWord, newWord) {
        let current = this.messageList;
        while (current !== null) {
            const word = current.data;
            if (word.toLowerCase() === targetWord.toLowerCase()) {
                let resultWord = '';
                let upperCase;
                for (let id = 0; id < newWord.length; id++) {
                    if (word[id]) {
                        upperCase = word[id] === word[id].toUpperCase();
                    }
                    const addLetter = upperCase
                        ? newWord[id].toUpperCase()
                        : newWord[id].toLowerCase();
                    resultWord += addLetter;
                }
                current.data = resultWord;
            }
            current = current.next;
        }
    }

    swap(word1, word2) {
        let current = this.messageList;
        while (current !== null) {
            const word = current.data;
            let newWord;
            if (word.toLowerCase() === word1.toLowerCase()) {
                newWord = word2;
            } else if (word.toLowerCase() === word2.toLowerCase()) {
                newWord = word1;
            }
            if (newWord) {
                let resultWord = '';
                let upperCase;
                for (let id = 0; id < newWord.length; id++) {
                    if (word[id]) {
                        upperCase = word[id] === word[id].toUpperCase();
                    }
                    const addLetter = upperCase
                        ? newWord[id].toUpperCase()
                        : newWord[id].toLowerCase();
                    resultWord += addLetter;
                }
                current.data = resultWord;
            }
            current = current.next;
        }
    }

    append(targetWord, newWord) {
        let current = this.messageList;
        while (current !== null) {
            if (current.data.toLowerCase() === targetWord.toLowerCase()) {
                const next = current.next;
                current.next = new LinkedListNode(newWord);
                current.next.next = next;
                current = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    prepend(targetWord, newWord) {
        let current = this.messageList;
        let previous;
        while (current !== null) {
            if (current.data.toLowerCase() === targetWord.toLowerCase()) {
                previous.next = new LinkedListNode(newWord);
                previous.next.next = current;
            }
            previous = current;
            current = current.next;
        }
    }
}

module.exports = exports = BulkWordEditor;
