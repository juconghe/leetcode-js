function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let temp = head;
    let count = 0;
    while(temp) {
        count +=1;
        temp = temp.next;
    }
    temp = head;
    while(count - n > 1) {
        temp = temp.next;
        count -= 1;
    }
    if (count === n) {
        head = head.next;
    } else {
        temp.next = temp.next.next;
    }
    return head;
};

// const testNode = new ListNode(1);
const testNode = new ListNode(1, new ListNode(2));
// const testNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

removeNthFromEnd(testNode, 1);