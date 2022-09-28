function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = null;
    let temp = null;
    while(list2 && list1) {
        if (list1.val < list2.val) {
            const tempNext = list1.next;
            if (head === null) {
                head = list1;
                temp = head;
            } else {
                temp.next = list1;
                temp = temp.next;
            }
            list1.next = null;
            list1 = tempNext;
        } else {
            const tempNext = list2.next;
            if (head === null) {
                head = list2;
                temp = head;
            } else {
                temp.next = list2;
                temp = temp.next;
            }
            list2.next = null;
            list2 = tempNext;
        }
    }
    while(list1) {
        const tempNext = list1.next;
        temp.next = list1;
        temp = temp.next;
        list1.next = null;
        list1 = tempNext;
    }
    while(list2) {
        const tempNext = list2.next;
        temp.next = list2;
        temp = temp.next;
        list2.next = null;
        list2 = tempNext;
    }
    return head;
};