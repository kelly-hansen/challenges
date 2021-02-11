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
            stack.push(45);
            stack.push(54);
            stack.push(121);

            expect(takeBottom(stack)).to.equal(45);

            stack = new Stack();
            stack.push('');
            stack.push(0);
            stack.push(false);
            stack.push(NaN);
            stack.push(null);

            expect(takeBottom(stack)).to.equal('');
        });

        it('should only remove the bottom value of stack', () => {
            const stack = new Stack();
            stack.push(9);
            stack.push(27);
            stack.push(19);
            stack.push(0);
            stack.push(67);

            takeBottom(stack);

            expect(stack.pop()).to.equal(67);
            expect(stack.pop()).to.equal(0);
            expect(stack.pop()).to.equal(19);
            expect(stack.pop()).to.equal(27);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
