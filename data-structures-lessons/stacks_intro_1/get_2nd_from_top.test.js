const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const get2ndFromTop = require(resolve(__dirname, 'get_2nd_from_top'));

describe('get2ndFromTop(stack):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return undefined', () => {
            const stack = new Stack();

            expect(get2ndFromTop(stack)).to.be.undefined;
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack contains one value,', () => {
        it('should return undefined', () => {
            let stack = new Stack();

            stack.push(36);

            expect(get2ndFromTop(stack)).to.be.undefined;

            stack = new Stack();

            stack.push(NaN);

            expect(get2ndFromTop(stack)).to.be.undefined;
        });

        it('should restore stack to its original state', () => {
            let stack = new Stack();

            stack.push('K');

            get2ndFromTop(stack);

            expect(stack.pop()).to.equal('K');
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();

            stack.push(null);

            get2ndFromTop(stack);

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

            expect(get2ndFromTop(stack)).to.equal(13);

            stack = new Stack();
            stack.push(false);
            stack.push(0);

            expect(get2ndFromTop(stack)).to.equal(false);
        });

        it('should restore stack to its original state', () => {
            let stack = new Stack();
            stack.push('toes');
            stack.push('knees');
            stack.push('shoulders');
            stack.push('head');

            get2ndFromTop(stack);

            expect(stack.pop()).to.equal('head');
            expect(stack.pop()).to.equal('shoulders');
            expect(stack.pop()).to.equal('knees');
            expect(stack.pop()).to.equal('toes');
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push('');
            stack.push(null);

            get2ndFromTop(stack);

            expect(stack.pop()).to.equal(null);
            expect(stack.pop()).to.equal('');
            expect(stack.peek()).to.be.undefined;
        });
    });
});
