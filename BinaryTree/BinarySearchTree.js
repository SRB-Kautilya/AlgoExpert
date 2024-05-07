// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let current  = this;
    // if(head === null){
    //   head.value = value;
    // }
    while(true){    
      if(current.value > value){
          if(current.left === null){
          current.left = new BST(value)
        break;
        }else {
          current = current.left;
        }
      }else {
     
     if(current.right === null){
          current.right = new BST(value)
           break;
        }else {
          current = current.right;
        }
      }
     
    }
   return this;
    // Write your code here.
    // Do not edit the return statement of this method.
   
  }

  contains(value) {
    // Write your code here.
    let current = this;
    while(current !== null){
    if(current.value > value ){
      if(current.left === null){
        return false;
      }else {
        current = current.left;
      }
    }else if (current.value < value ){
      if(current.right === null){
        return false;
      }else{
        current = current.right
      }
    }else if( current.value === value){
      return true;
    }
    }
return false;
  }

  remove(value,parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    while(currentNode!==null){
      if(currentNode.value < value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else if(currentNode.value > value){
        parentNode = currentNode;
        currentNode = currentNode.left
      }else{
    if(currentNode.left !== null && currentNode.right !== null){
      currentNode.value = currentNode.right.getMinValue();
      currentNode.right.remove(currentNode.value,currentNode)
    }else if(parentNode === null){
      if(currentNode.left !==null){
        currentNode.value = currentNode.left.value;
        currentNode.right = currentNode.left.right;
        currentNode.left = currentNode.left.left;
      }if(currentNode.right !==null){
        currentNode.value = currentNode.right.value;
        currentNode.left = currentNode.right.left;
        currentNode.right = currentNode.right.right;
      }else{
        
      }
    }else if(parentNode.left === currentNode){
      parentNode.left = currentNode.left !== null?currentNode.left:currentNode.right;
    }else if(parentNode.right === currentNode){
      parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
    }
   break;
      }
    }  
    
    return this;
  }

  getMinValue(){
    let currentNode = this;
    while(currentNode.left !==null){
      currentNode = currentNode.left;
    }
   return currentNode.value
  }
}

// Do not edit the line below.
exports.BST = BST;
