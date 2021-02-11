const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const isEmpty = require(resolve(__dirname, 'is_empty'));

describe('isEmpty(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return true', () => {
            const stack = new Stack();

            expect(isEmpty(stack)).to.be.true;
        });
    });

    context('when stack is not empty,', () => {
        it('should return false', () => {
            const stack = new Stack();
            stack.push(13);

            expect(isEmpty(stack)).to.be.false;

            stack.push(9);

            expect(isEmpty(stack)).to.be.false;

            stack.push('');

            expect(isEmpty(stack)).to.be.false;

            stack.push(null);

            expect(isEmpty(stack)).to.be.false;
        });

        it('should not modify stack', () => {
            const stack = new Stack();
            stack.push('head');
            stack.push('shoulders');
            stack.push('knees');
            stack.push('toes');

            isEmpty(stack);

            expect(stack.pop()).to.equal('toes');
            expect(stack.pop()).to.equal('knees');
            expect(stack.pop()).to.equal('shoulders');
            expect(stack.pop()).to.equal('head');
            expect(stack.peek()).to.be.undefined;
        });
    });
});
