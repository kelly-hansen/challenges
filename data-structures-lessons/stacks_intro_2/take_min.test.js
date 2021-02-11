const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const takeMin = require(resolve(__dirname, 'take_min'));

describe('takeMin(numberStack):', () => {
    context('when numberStack is empty,', function () {
        this.bail(false);
        it('should return Infinity', () => {
            expect(takeMin(new Stack())).to.equal(Infinity);
        });
    });

    context('when numberStack is not empty,', () => {
        it('should return the minimum of the values in numberStack', () => {
            let stack = new Stack();
            stack.push(-4848);
            stack.push(-567);
            stack.push(-7456);
            stack.push(-475);
            stack.push(0);
            stack.push(-567);
            stack.push(-4756);

            expect(takeMin(stack)).to.equal(-7456);

            stack = new Stack();
            stack.push(7189);
            stack.push(4156);
            stack.push(8635);

            expect(takeMin(stack)).to.equal(4156);

            stack = new Stack();
            stack.push(Infinity);
            stack.push(Infinity);
            stack.push(Infinity);

            expect(takeMin(stack)).to.equal(Infinity);
        });

        it('should remove the highest copy of the minimum value from numberStack', () => {
            let stack = new Stack();
            stack.push(23);
            stack.push(24);
            stack.push(47);
            stack.push(52);
            stack.push(49);
            stack.push(25);
            stack.push(37);

            takeMin(stack);

            expect(stack.pop()).to.equal(37);
            expect(stack.pop()).to.equal(25);
            expect(stack.pop()).to.equal(49);
            expect(stack.pop()).to.equal(52);
            expect(stack.pop()).to.equal(47);
            expect(stack.pop()).to.equal(24);
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push(-4576);
            stack.push(-3626);
            stack.push(-8456);
            stack.push(-2354);
            stack.push(-8456);
            stack.push(-8456);
            stack.push(0);
            stack.push(-3456);

            takeMin(stack);

            expect(stack.pop()).to.equal(-3456);
            expect(stack.pop()).to.equal(0);
            expect(stack.pop()).to.equal(-8456);
            expect(stack.pop()).to.equal(-2354);
            expect(stack.pop()).to.equal(-8456);
            expect(stack.pop()).to.equal(-3626);
            expect(stack.pop()).to.equal(-4576);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
