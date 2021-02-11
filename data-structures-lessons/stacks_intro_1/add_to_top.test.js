const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const addToTop = require(resolve(__dirname, 'add_to_top'));

describe('addToTop(stack, value):', function () {
    this.bail(false);
    it('should add value to top of stack', () => {
        const testStack = new Stack();

        addToTop(testStack, 81);

        expect(testStack.peek()).to.equal(81);

        addToTop(testStack, 19);

        expect(testStack.peek()).to.equal(19);

        addToTop(testStack, 27);

        expect(testStack.pop()).to.equal(27);
        expect(testStack.pop()).to.equal(19);
        expect(testStack.pop()).to.equal(81);
        expect(testStack.peek()).to.be.undefined;
    });
});
