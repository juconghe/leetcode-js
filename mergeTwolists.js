function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let sortedList
    let ptr1 = list1;
    let ptr2 = list2;
    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1.val < ptr2.val) {
            while(ptr1.next !== null && ptr1.val < ptr2.val) {
                ptr1 = ptr1.next;
            }
            ptr1.next = ptr2;
        } else {
            while(ptr2.next !== null && ptr2.val < ptr1.val) {
                ptr2 = ptr2.next;
            }
            ptr2.next = ptr1;
        }
    }
    console.log(ptr1);
    console.log(ptr2);
};