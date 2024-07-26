function invertBinaryTree(tree) {
    // Write your code here.
    let arr = [tree];
    while(arr.length !==0){
      let sliced = arr.shift()
      if(sliced === null) continue;
       invertTree(sliced);
      arr.push(sliced.left);
      arr.push(sliced.right)
    }
    return tree
  }
  
  function invertTree(sliced){
    let pointer = sliced.left;
    sliced.left = sliced.right;
    sliced.right = pointer;
    return sliced;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
