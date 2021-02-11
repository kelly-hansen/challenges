const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const take2ndFromTop = require(resolve(__dirname, 'take_2nd_from_top'));

describe('take2ndFromTop(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return undefined', () => {
            const stack = new Stack();

            expect(take2ndFromTop(stack)).to.be.undefined;
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack contains one value,', () => {
        it('should return undefined', () => {
            let stack = new Stack();
            stack.push(36);

            expect(take2ndFromTop(stack)).to.be.undefined;

            stack = new Stack();
            stack.push(NaN);

            expect(take2ndFromTop(stack)).to.be.undefined;
        });

        it('should restore stack to its original state', () => {
            const stack = new Stack();

            stack.push('K');

            take2ndFromTop(stack);

            expect(stack.pop()).to.equal('K');
            expect(stack.peek()).to.be.undefined;

            stack.push(null);

            take2ndFromTop(stack);

            expect(stack.pop()).to.equal(null);
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack contains more than one value,', () => {
        it('should return the 2nd from the top value of stack', () => {
            let stack = new Stack();
            stack.push(92);
            stack.push(13);
            stack.push(9);

            expect(take2ndFromTop(stack)).to.equal(13);

            stack = new Stack();
            stack.push('k');
            stack.push('');
            stack.push(0);

            expect(take2ndFromTop(stack)).to.equal('');
        });

        it('should remove only the 2nd value from the top from stack', () => {
            const stack = new Stack();
            stack.push('toes');
            stack.push('knees');
            stack.push('shoulders');
            stack.push('head');

            take2ndFromTop(stack);

            expect(stack.pop()).to.equal('head');
            expect(stack.pop()).to.equal('knees');
            expect(stack.pop()).to.equal('toes');
            expect(stack.peek()).to.be.undefined;

            stack.push(true);
            stack.push(false);
            stack.push(-0);

            take2ndFromTop(stack);

            expect(stack.pop()).to.equal(-0);
            expect(stack.pop()).to.equal(true);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
