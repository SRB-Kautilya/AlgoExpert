class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let arr = [];
    inOrderTraverse(tree, k, arr)
    return arr[arr.length - k]
}


function inOrderTraverse(tree, k, arr) {
    if (tree !== null) {
        inOrderTraverse(tree.left, arr)
        arr.push(tree.value)
        inOrderTraverse(tree.right, arr)
    }
    return arr;
}



class TreeInfo {
    constructor(noOfNodesVisited,latesVisitedNode){
        this.noOfNodesVisited = noOfNodesVisited;
        this.latesVisitedNode = latesVisitedNode;
    }
}


function findKthLargestValueInBst(tree, k) {
    // Write your code here.
let treeInfo = new TreeInfo(0,-1);
reverseInOrderTraverse(tree,k,treeInfo)
return treeInfo.latesVisitedNode;
}


function reverseInOrderTraverse(tree,k,treeInfo){
if(tree === null || treeInfo.noOfNodesVisited >= k)return;

reverseInOrderTraverse(tree.right,k,treeInfo)
if(treeInfo.noOfNodesVisited < k){
    treeInfo.noOfNodesVisited++;
    treeInfo.latesVisitedNode = tree.value;
    reverseInOrderTraverse(tree.left,k,treeInfo) 
}

}

