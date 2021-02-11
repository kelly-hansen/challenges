const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const takeValueAtIndex = require(resolve(__dirname, 'take_value_at_index'));

describe('takeValueAtIndex(stack, index):', function () {
    this.bail(false);
    context('when stack has at least index + 1 values,', () => {
        it('should return the value at index from the top', () => {
            const stack = new Stack();
            stack.push(34);
            stack.push(65);
            stack.push(6);
            stack.push(264);
            stack.push(63);
            stack.push(0);
            stack.push(54);
            stack.push(24);

            expect(takeValueAtIndex(stack, 5)).to.equal(6);
        });
    });

    context('when stack does not have at least index + 1 values,', () => {
        it('should return undefined', () => {
            expect(takeValueAtIndex(new Stack(), 0)).to.be.undefined;

            const stack = new Stack();
            stack.push(85);
            stack.push(47);
            stack.push(55);
            stack.push(64);

            expect(takeValueAtIndex(stack, 4)).to.be.undefined;
        });
    });
});
