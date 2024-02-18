class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}


class Stack{
    constructor(value){
        this.top = null;
        this.bottom=null;
        this.length = 0;

    }

    peek(){
        return this.top;
    }

    push(value){
        let node = new Node(value)
       if(this.length === 0){
        this.top = node;
        this.bottom = this.top;
        this.length++
       }else{
        node.next = this.top;
        this.top = node;
        this.length++
        return this
       }


    }

    pop(){
      let hold = this.top.next;
      this.top = hold;
      this.length--
      return this
    }
}

let stack = new Stack()

console.log(stack.push(10))
console.log(stack.push(11))
console.log(stack.push(12))

console.log(stack.pop())
console.log(stack.peek())



