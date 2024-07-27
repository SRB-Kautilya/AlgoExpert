class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value) {
        let newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }

    prepend(value) {
        let newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this;
    }

    insert(index, value) {
        let newNode = {
            value: value,
            next: null
        }

        if (index === 0 || index < 0) {
            this.prepend(value)
        } else if (index > this.length) {
            this.append(value)
        } else {
            let list = this.head
            let current = 0;
            while (current < index - 1) {  
                list = list.next;   
                current++
            }
            let addValue = list; 
            let header = list.next 
            addValue.next = newNode;
            addValue.next.next = header;
            this.length++
            return this
        }

    }

    remove(index, value) {

        let newNode = {
            value: value,
            next: null
        }

        let current = 0;
        let list = this.head;
        while (current < index - 1) {
            list = list.next;
            current++
        }
        let removeNode = list;
        let header = list.next;
        removeNode.next = header.next;
        this.length--
    }
}

 // 8 9 10 11 12 13 

let linkedList = new LinkedList(10)
linkedList.append(11)
linkedList.append(12)
console.log(linkedList.append(13))
linkedList.prepend(9)
console.log(linkedList.prepend(8))

console.log(linkedList.insert(3, 10.5))
// console.log(linkedList.insert(1, 8.5))
// console.log(linkedList.insert(20, 14))



