var addTwoNumbers = function (l1, l2) {
  let l1Arr = [];
  l1Arr.push(l1.val);
  while (l1.next !== null) {
    l1Arr.push(l1.next.val);
    l1 = l1.next;
  }
  let l1Val = 0;
  for (let i = 0; i < l1Arr.length; i++) {
    l1Val += l1Arr[i] * Math.pow(10, i);
  }

  let l2Arr = [];
  l2Arr.push(l2.val);
  while (l2.next !== null) {
    l2Arr.push(l2.next.val);
    l2 = l2.next;
  }
  let l2Val = 0;
  for (let i = 0; i < l2Arr.length; i++) {
    l2Val += l2Arr[i] * Math.pow(10, i);
  }

  const sumArr = (l1Val + l2Val).toString().split('');
  let prev;
  for (let i = 0; i <= sumArr.length; i++) {
    prev = new ListNode(sumArr[i], prev);
    if (i === sumArr.length - 1) {
      return prev;
    }
  }
};

//incomplete
var reverse = function (x) {
  return x.toString().split('').reverse().join('');
};

var maxArea = function (height) {
  let result = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const minHeight = Math.min(height[i], height[j]);
    const area = minHeight * (j - i);
    if (area > result) {
      result = area;
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return result;
};

var maximumWealth = function (accounts) {
  return accounts.reduce((a, b, i) => {
    return Math.max(a, accounts[i].reduce((x, y) => x + y));
  }, 0);
};

var kidsWithCandies = function (candies, extraCandies) {
  const greatest = candies.reduce((a, b) => Math.max(a, b));
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= greatest ? true : false);
  }
  return result;
};
