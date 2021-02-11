const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const getMax = require(resolve(__dirname, 'get_max'));

describe('getMax(numberStack):', function () {
    this.bail(false);
    context('when numberStack is empty,', () => {
        it('should return -Infinity', () => {
            expect(getMax(new Stack())).to.equal(-Infinity);
        });
    });

    context('when numberStack is not empty,', () => {
        it('should return the maximum of the values in numberStack', () => {
            let stack = new Stack();
            stack.push(3456);
            stack.push(235);
            stack.push(3456);
            stack.push(325);
            stack.push(567);
            stack.push(0);
            stack.push(2865);

            expect(getMax(stack)).to.equal(3456);

            stack = new Stack();
            stack.push(-547);
            stack.push(-236);
            stack.push(-418);
            stack.push(-628);

            expect(getMax(stack)).to.equal(-236);

            stack = new Stack();
            stack.push(-Infinity);
            stack.push(-Infinity);

            expect(getMax(stack)).to.equal(-Infinity);
        });

        it('should restore numberStack to its original state', () => {
            const stack = new Stack();
            stack.push(4576);
            stack.push(3626);
            stack.push(0);
            stack.push(367);
            stack.push(3456);
            stack.push(8456);

            getMax(stack);

            expect(stack.pop()).to.equal(8456);
            expect(stack.pop()).to.equal(3456);
            expect(stack.pop()).to.equal(367);
            expect(stack.pop()).to.equal(0);
            expect(stack.pop()).to.equal(3626);
            expect(stack.pop()).to.equal(4576);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
