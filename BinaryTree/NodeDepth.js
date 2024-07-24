function nodeDepths(root) {
    // Write your code here.
let sum = 0;
return calculateSum(root,sum)

  }

  function calculateSum(root,sum){
    if(root === null ) return 0
    return sum + calculateSum(root.left,sum+1)+calculateSum(root.right,sum+1)

  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }