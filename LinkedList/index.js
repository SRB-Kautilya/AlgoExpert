class LinkedList {
    constructor(value){
        this.head = {
           value: value,
           next:null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value){
     let newNode = {
        value: value,
        next:null
     }
 
     this.tail.next = newNode;
     this.tail = newNode;
     this.length++
     return this
    }

    prepend(value){
        let newNode = {
            value: value,
            next:null
         } 

         newNode.next = this.head;
         this.head = newNode
         this.length++;
         return this;
    }
}

let linkedList = new LinkedList(10)
linkedList.append(11)
linkedList.append(12)
console.log(linkedList.append(13))
linkedList.prepend(9)
console.log(linkedList.prepend(8))


