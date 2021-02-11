const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const count = require(resolve(__dirname, 'count'));

describe('count(stack):', function () {
    this.bail(false);
    it('should return the number of values in stack', () => {
        let stack = new Stack();

        expect(count(stack)).to.equal(0);

        stack = new Stack();
        stack.push(92);
        stack.push(13);
        stack.push(9);

        expect(count(stack)).to.equal(3);

        stack = new Stack();
        stack.push(null);
        stack.push(false);
        stack.push(0);
        stack.push(-0);
        stack.push(NaN);
        stack.push('');

        expect(count(stack)).to.equal(6);
    });
});
