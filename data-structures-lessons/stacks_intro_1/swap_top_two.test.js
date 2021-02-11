const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const swapTopTwo = require(resolve(__dirname, 'swap_top_two'));

describe('swapTopTwo(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should do nothing', () => {
            const stack = new Stack();

            expect(() => swapTopTwo(stack)).to.not.throw();
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack contains one value,', () => {
        it('should restore stack to its original state', () => {
            const stack = new Stack();

            stack.push('n');

            swapTopTwo(stack);

            expect(stack.pop()).to.equal('n');
            expect(stack.peek()).to.be.undefined;

            stack.push(null);

            swapTopTwo(stack);

            expect(stack.pop()).to.equal(null);
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack contains more than one value,', () => {
        it('should swap the top two values', () => {
            const stack = new Stack();
            stack.push('toes');
            stack.push('knees');
            stack.push('shoulders');
            stack.push('head');

            swapTopTwo(stack);

            expect(stack.pop()).to.equal('shoulders');
            expect(stack.pop()).to.equal('head');
            expect(stack.pop()).to.equal('knees');
            expect(stack.pop()).to.equal('toes');
            expect(stack.peek()).to.be.undefined;

            stack.push(99999);
            stack.push('');
            stack.push(false);

            swapTopTwo(stack);

            expect(stack.pop()).to.equal('');
            expect(stack.pop()).to.equal(false);
            expect(stack.pop()).to.equal(99999);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
