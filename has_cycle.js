function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (!head) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
       if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};