const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const sum = require(resolve(__dirname, 'sum'));

describe('sum(numberStack):', function () {
    this.bail(false);
    it('should return the total of the values in stack', () => {
        let stack = new Stack();

        expect(sum(stack)).to.equal(0);

        stack = new Stack();
        stack.push(92);
        stack.push(13);
        stack.push(9);
        stack.push(0);
        stack.push(64);
        stack.push(19.6);
        stack.push(56.7);

        expect(sum(stack)).to.equal(254.3);
    });
});
