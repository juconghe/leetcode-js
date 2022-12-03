function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let newHead = null;
    let tempHead = newHead;
    let carry = 0;
    while(l1 || l2 || carry) {
        const l1Value = l1 ? l1.val : 0;
        const l2Value = l2 ? l2.val : 0;
        let value = l1Value + l2Value + carry;
        if (value > 9) {
            value -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        const newNode = new ListNode(value);
        if (!newHead) {
            newHead = newNode;
            tempHead = newHead;
        } else {
            tempHead.next = newNode;
            tempHead = tempHead.next;
        }
        if (l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return newHead;
};

const testNode1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const testNode2 = new ListNode(5, new ListNode(6, new ListNode(4)));
addTwoNumbers(testNode1, testNode2);