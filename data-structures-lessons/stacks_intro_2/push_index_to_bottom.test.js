const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const pushIndexToBottom = require(resolve(__dirname, 'push_index_to_bottom'));

describe('pushIndexToBottom(stack, index):', function () {
    this.bail(false);
    context('when stack has at least index + 1 values,', () => {
        it('should move the value at index to the bottom of stack', () => {
            const stack = new Stack();
            stack.push(null);
            stack.push(65);
            stack.push(84);
            stack.push('');
            stack.push(65);
            stack.push(78);

            pushIndexToBottom(stack, 4);

            expect(stack.pop()).to.equal(78);
            expect(stack.pop()).to.equal(65);
            expect(stack.pop()).to.equal('');
            expect(stack.pop()).to.equal(84);
            expect(stack.pop()).to.equal(null);
            expect(stack.pop()).to.equal(65);
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack does not have at least index + 1 values,', () => {
        it('should restore stack to its original state', () => {
            const stack = new Stack();
            stack.push(52);
            stack.push(92);
            stack.push(false);
            stack.push(94);
            stack.push(86);
            stack.push(54);

            pushIndexToBottom(stack, 6);

            expect(stack.pop()).to.equal(54);
            expect(stack.pop()).to.equal(86);
            expect(stack.pop()).to.equal(94);
            expect(stack.pop()).to.equal(false);
            expect(stack.pop()).to.equal(92);
            expect(stack.pop()).to.equal(52);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
