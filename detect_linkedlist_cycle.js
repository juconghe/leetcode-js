function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let hashTable = new Set([]);
    let temp = head;
    while (temp) {
        if (hashTable.has(temp)) return temp;
        hashTable.add(temp);
        temp = temp.next;
    }
    return null;
};