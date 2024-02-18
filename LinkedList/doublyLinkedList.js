class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        let node = new Node(value);
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }


    insert(index, value) {
        if (index <= 0) {
            this.prepend(value);
        }else if(index>=this.length){
            this.append(Value)
        }else{
            let node = new Node(value);
            let curr = this.head;
            let count = 0;
            while(count !== index-1){
                curr = curr.next;
                count++;
            }
            let leader = curr;
            let holdingPointer = leader.next;
            curr.next = node;
            node.next = holdingPointer;
            node.prev = leader;
            holdingPointer.prev = node;
            this.length++
            return this;
        }


    }

    remove(index) {
        let count = 0;
        let curr = this.head;
        while (count < index - 1) {
            curr = curr.next;
            count++
        }
        let leader = curr;
        let unwantedNode = curr.next;
        leader.next = unwantedNode.next;
        unwantedNode.prev = leader
        return this
    }



}

let doublyLinkedList = new DoublyLinkedList(10)

console.log(doublyLinkedList.append(11))
console.log(doublyLinkedList.append(12))
console.log(doublyLinkedList.append(13))
console.log(doublyLinkedList.prepend(9))
console.log(doublyLinkedList.insert(3, 11.5))
// console.log(doublyLinkedList.remove(3))


//console.log(doublyLinkedList.append1(11))