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

var reverse = function (x) {
  return x.toString().split('').reverse().join('');
};
