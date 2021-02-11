const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const max = require(resolve(__dirname, 'max'));

describe('max(numberStack):', function () {
    this.bail(false);
    it('should return the maximum of the values in stack', () => {
        let stack = new Stack();

        expect(max(stack)).to.equal(-Infinity);

        stack = new Stack();
        stack.push(-Infinity);

        expect(max(stack)).to.equal(-Infinity);

        stack = new Stack();
        stack.push(45);
        stack.push(26);
        stack.push(34);
        stack.push(85);
        stack.push(0);
        stack.push(37);
        stack.push(3);
        stack.push(53);

        expect(max(stack)).to.equal(85);

        stack = new Stack();
        stack.push(-847626);
        stack.push(-9234752);
        stack.push(-747444);

        expect(max(stack)).to.equal(-747444);

        stack = new Stack();
        stack.push(-Infinity);
        stack.push(18);
        stack.push(-Infinity);
        stack.push(123);
        stack.push(-5);

        expect(max(stack)).to.equal(123);
    });
});
