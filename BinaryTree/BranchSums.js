class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function branchSums(root) {
    // Write your code here.
      const sums =[];
      calculateSum(root,0,sums)
      return sums;
      
  }



function calculateSum(node,runningSum,sums){

    if(!node) return;
const newRunningSum = runningSum +sums;

if(!node.left && !node.right){
    sums.push(newRunningSum)
}

calculateSum(node.left,runningSum,sums);
calculateSum(node.right,runningSum,sums);



}