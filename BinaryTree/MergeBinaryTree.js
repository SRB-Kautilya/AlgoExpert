class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  exports.BinaryTree = BinaryTree;
  
  function mergeBinaryTrees(tree1, tree2) {
    // Write your code here.
    if(tree1 === null && tree2 === null) return null;
    if(tree2===null)return tree1;
    if(tree1===null)return tree2;
  let sum = tree1.value+tree2.value;
    const tree = new BinaryTree(sum);
    tree.left = mergeBinaryTrees(tree1.left,tree2.left);
    tree.right = mergeBinaryTrees(tree1.right,tree2.right);
    return tree
  }
  