class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  function removeDuplicatesFromLinkedList(linkedList) {

    let currentNode = linkedList;
    
    while(currentNode !==null && currentNode.next !== null){
        if(currentNode.val === currentNode.next.value){
            currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
    }
    return this;
  }


  //1,1,4,4,4,5,6,6