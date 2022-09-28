function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let tail = head;
    while(tail && tail.next) {
        tail = tail.next
    }
    while(head !== tail) {
        const temp = head.next;
        head.next = tail.next;
        tail.next = head;
        head = temp;
    }
    return tail;
};

const testNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
reverseList(testNode);