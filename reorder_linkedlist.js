function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    let temp = head;
    const list = [];
    while(temp) {
        list.push(temp);
        const next = temp.next;
        temp.next = null;
        temp = next;
    }
    if (list.length <= 2) return head;
    let leftPtr = 0;
    let rightPtr = list.length - 1;
    let tail = null;
    while (leftPtr < rightPtr) {
        list[leftPtr].next = list[rightPtr];
        if (!tail) {
            tail = list[rightPtr];
        } else {
            tail.next = list[leftPtr];
            tail = list[rightPtr];
        }
        leftPtr += 1;
        rightPtr -= 1;
    }
    if (leftPtr === rightPtr) {
        tail.next = list[rightPtr];
    }
};

const testNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
reorderList(testNode);