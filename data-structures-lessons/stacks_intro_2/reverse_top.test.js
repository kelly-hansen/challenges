const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const reverseTop = require(resolve(__dirname, 'reverse_top'));

describe('reverseTop(stack, count):', function () {
    this.bail(false);
    context('when stack does not have at least count values,', () => {
        it('should do nothing', () => {
            const stack = new Stack();
            stack.push(85);
            stack.push(42);
            stack.push(19);
            stack.push(48);

            reverseTop(stack, 6);

            expect(stack.pop()).to.equal(48);
            expect(stack.pop()).to.equal(19);
            expect(stack.pop()).to.equal(42);
            expect(stack.pop()).to.equal(85);
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack has at least count values,', () => {
        it('should reverse the top count values in stack', () => {
            let stack = new Stack();
            stack.push(74);
            stack.push(18);
            stack.push(45);
            stack.push(26);
            stack.push(52);
            stack.push(79);
            stack.push(48);

            reverseTop(stack, 5);

            expect(stack.pop()).to.equal(45);
            expect(stack.pop()).to.equal(26);
            expect(stack.pop()).to.equal(52);
            expect(stack.pop()).to.equal(79);
            expect(stack.pop()).to.equal(48);
            expect(stack.pop()).to.equal(18);
            expect(stack.pop()).to.equal(74);
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push('');
            stack.push(NaN);
            stack.push(false);
            stack.push(null);
            stack.push(0);

            reverseTop(stack, 4);

            expect(stack.pop()).to.be.NaN;
            expect(stack.pop()).to.equal(false);
            expect(stack.pop()).to.equal(null);
            expect(stack.pop()).to.equal(0);
            expect(stack.pop()).to.equal('');
            expect(stack.peek()).to.be.undefined;
        });
    });
});
