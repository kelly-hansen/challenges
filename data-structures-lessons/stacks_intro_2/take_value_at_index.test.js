const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const takeValueAtIndex = require(resolve(__dirname, 'take_value_at_index'));

describe('takeValueAtIndex(stack, index):', function () {
    this.bail(false);
    context('when stack has at least index + 1 values,', () => {
        it('should return the value at index from the top', () => {
            const stack = new Stack();
            stack.push(43);
            stack.push(34);
            stack.push(64);
            stack.push(41);
            stack.push(false);
            stack.push(87);
            stack.push(74);
            stack.push(94);

            expect(takeValueAtIndex(stack, 4)).to.equal(41);
        });

        it('should restore all other values onto stack', () => {
            const stack = new Stack();
            stack.push(43);
            stack.push(26);
            stack.push(26);
            stack.push(0);
            stack.push(78);
            stack.push(30);

            takeValueAtIndex(stack, 4);

            expect(stack.pop()).to.equal(30);
            expect(stack.pop()).to.equal(78);
            expect(stack.pop()).to.equal(0);
            expect(stack.pop()).to.equal(26);
            expect(stack.pop()).to.equal(43);
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack does not have at least index + 1 values,', () => {
        it('should return undefined', () => {
            expect(takeValueAtIndex(new Stack(), 0)).to.be.undefined;

            let stack = new Stack();
            stack.push(73);
            stack.push(26);
            stack.push(34);
            stack.push(72);

            expect(takeValueAtIndex(stack, 4)).to.be.undefined;

            stack = new Stack();
            stack.push(0);
            stack.push(false);
            stack.push(null);

            expect(takeValueAtIndex(stack, 3)).to.be.undefined;
        });

        it('should restore stack to its original state', () => {
            const stack = new Stack();
            stack.push(337);
            stack.push(null);
            stack.push(84);
            stack.push(46);
            stack.push(84);
            stack.push(86);

            takeValueAtIndex(stack, 9);

            expect(stack.pop()).to.equal(86);
            expect(stack.pop()).to.equal(84);
            expect(stack.pop()).to.equal(46);
            expect(stack.pop()).to.equal(84);
            expect(stack.pop()).to.equal(null);
            expect(stack.pop()).to.equal(337);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
