class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
    // Write your code here.
  
    return calculateHeight(tree).isBalanced;
    
    
  }
  
  function calculateHeight(node){
    if(node===null)  return new TreeInfo(true,-1);
  
    const leftSubTreeInfo = calculateHeight(node.left);
    const rightSubTreeInfo = calculateHeight(node.right);
  
    const isBalanced = leftSubTreeInfo.isBalanced && rightSubTreeInfo.isBalanced &&
                        Math.abs(leftSubTreeInfo.height-rightSubTreeInfo.height )<=1 ;
    const height = Math.max(leftSubTreeInfo.height,rightSubTreeInfo.height)+1;
    return new TreeInfo(isBalanced,height)
  
    
    
  }
  
  
  
  class TreeInfo {
    constructor(isbalance,height){
    this.isBalanced= isbalance,
    this.height=height
    }
  }
  