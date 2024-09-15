class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    } 
  }
  
  exports.BinaryTree = BinaryTree;
  
  function symmetricalTree(tree) {
    // Write your code here.
    const stackLeft = [tree.left];
    const stackRight = [tree.right]
  
    while(stackLeft.length>0){
      const left  = stackLeft.shift();
      const right  = stackRight.shift();
  
      if(left === null && right === null ) continue;
      if(left === null || right === null || left.value != right.value){
        return false;
      }
      stackLeft.push(left.left);
      stackLeft.push(left.right);
      stackRight.push(right.right);
      stackRight.push(right.left);
      
    }
  
    
    
    return true;
  }