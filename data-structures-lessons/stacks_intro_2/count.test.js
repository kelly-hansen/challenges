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
        stack.push(34);
        stack.push(36);
        stack.push(45);
        stack.push(4);
        stack.push(98);

        expect(count(stack)).to.equal(5);

        stack = new Stack();
        stack.push(null);
        stack.push(false);
        stack.push(0);
        stack.push(NaN);
        stack.push('');
        stack.push(-0);

        expect(count(stack)).to.equal(6);
    });

    it('should restore stack to its original state', () => {
        const stack = new Stack();
        stack.push(0);
        stack.push(5);
        stack.push(47);
        stack.push(57);

        count(stack);

        expect(stack.pop()).to.equal(57);
        expect(stack.pop()).to.equal(47);
        expect(stack.pop()).to.equal(5);
        expect(stack.pop()).to.equal(0);
        expect(stack.peek()).to.be.undefined;
    });
});
