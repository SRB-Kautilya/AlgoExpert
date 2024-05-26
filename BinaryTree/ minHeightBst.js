
//array = [1, 2, 5, 7, 10, 13, 14, 15, 22];

function minHeightBst(array) {
 return constructMinHeightBST(array,0,array.length-1);

}

function constructMinHeightBST(array,startIdx,endIdx){
    if(endIdx<startIdx) return null;
    let midIdx = Math.floor((startIdx+endIdx)/2);
    let bst = new BST(array[midIdx]);
    bst.left = constructMinHeightBST(array,startIdx,midIdx-1);
    bst.right = constructMinHeightBST(array,midIdx+1, endIdx)
    return bst
}

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }