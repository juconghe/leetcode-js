 function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
 };

 /**
  * @param {Node} head
  * @return {Node}
  */
 var copyRandomList = function (head) {
     const lookup = new Map();
     let newHead = null;
     let newTempHead = newHead;
     let temp = head;
     while (temp) {
         const newNode = new Node(temp.val, null, null);
         lookup.set(temp, newNode);
         if (!newHead) {
             newHead = newNode;
         } else {
             newTempHead.next = newNode;
         }
         newTempHead = newNode;
         temp = temp.next;
     }

     temp = head;
     while(temp) {
         const random = temp.random;
         if (random && lookup.get(random)) {
            lookup.get(temp).random = lookup.get(random);
         }
         temp = temp.next;
     }
     return newHead;
 };

 const testNode = new Node(7, new Node(13, new Node(11, new Node(10, new Node(1, null)))));
 copyRandomList(testNode);