const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const takeBottom = require(resolve(__dirname, 'take_bottom'));

describe('takeBottom(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return undefined', () => {
            const stack = new Stack();

            expect(takeBottom(stack)).to.be.undefined;
        });
    });

    context('when stack is not empty,', () => {
        it('should return the bottom value of stack', () => {
            let stack = new Stack();
            stack.push(13);
            stack.push(73);
            stack.push(63);
            stack.push(53);

            expect(takeBottom(stack)).to.equal(13);

            stack = new Stack();
            stack.push('truth');
            stack.push(-0);
            stack.push(null);
            stack.push('');
            stack.push(NaN);
            stack.push('');
            stack.push(0);

            expect(takeBottom(stack)).to.equal('truth');
        });
    });
});
