const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const takeTop = require(resolve(__dirname, 'take_top'));

describe('takeTop(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return undefined', () => {
            const stack = new Stack();

            expect(takeTop(stack)).to.be.undefined;
        });
    });

    context('when stack is not empty,', () => {
        it('should return the top value of stack', () => {
            const stack = new Stack();
            stack.push(13);

            expect(takeTop(stack)).to.equal(13);

            stack.push(9);

            expect(takeTop(stack)).to.equal(9);

            stack.push(false);

            expect(takeTop(stack)).to.equal(false);

            stack.push(null);

            expect(takeTop(stack)).to.equal(null);
        });

        it('should remove top value from stack', () => {
            const stack = new Stack();
            stack.push('toes');
            stack.push('knees');
            stack.push('shoulders');
            stack.push('head');

            takeTop(stack);
            expect(stack.peek()).to.equal('shoulders');

            takeTop(stack);
            expect(stack.peek()).to.equal('knees');

            takeTop(stack);
            expect(stack.peek()).to.equal('toes');

            takeTop(stack);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
