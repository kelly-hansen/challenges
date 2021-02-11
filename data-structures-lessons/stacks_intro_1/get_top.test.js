const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const getTop = require(resolve(__dirname, 'get_top'));

describe('getTop(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return undefined', () => {
            const stack = new Stack();

            expect(getTop(stack)).to.be.undefined;
        });
    });

    context('when stack is not empty,', () => {
        it('should return the top value of stack', () => {
            const stack = new Stack();
            stack.push(13);

            expect(getTop(stack)).to.equal(13);

            stack.push(9);

            expect(getTop(stack)).to.equal(9);

            stack.push('');

            expect(getTop(stack)).to.equal('');

            stack.push(null);

            expect(getTop(stack)).to.equal(null);
        });

        it('should not modify stack', () => {
            const stack = new Stack();
            stack.push('toes');
            stack.push('knees');
            stack.push('shoulders');
            stack.push('head');

            getTop(stack);

            expect(stack.pop()).to.equal('head');
            expect(stack.pop()).to.equal('shoulders');
            expect(stack.pop()).to.equal('knees');
            expect(stack.pop()).to.equal('toes');
            expect(stack.peek()).to.be.undefined;
        });
    });
});
