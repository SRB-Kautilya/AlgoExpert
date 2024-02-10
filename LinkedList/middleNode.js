// finding the middle node of a linked list, if its even give  linkedlist.length/2 +1  if odd linkedlist.length/2 


class LinkedList {
    constructor(value){
        this.head = value;
        this.tail = null;
    }
}

// 0(n)  0(1)
function middleNode(linkedList) {
    let curr = linkedList;
    let length = 0;
    while(curr.next!==null){
        length++
    }
 for(let i = 0; i<=Math.floor(length/2);i++ ){
    curr = curr.next;
 }

return curr
  }
  