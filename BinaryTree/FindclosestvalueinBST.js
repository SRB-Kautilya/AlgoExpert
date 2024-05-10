// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    // Write your code here.
    validBstHelper(tree.value,-Infinity,Infinity)
  }
  
  function validBstHelper(tree,minValue,maxValue){
    if(tree === null) return true;
    if(tree.value < minValue || tree.value >= maxValue) return false;
    const leftIsValid = validBstHelper(tree.value, minValue,tree.value);
    return leftIsValid && validBstHelper(tree.value,tree.value,maxValue)
  }
  

//   {
//     "tree": {
//       "nodes": [
//         {"id": "10", "left": "5", "right": "15", "value": 10},
//         {"id": "15", "left": "13", "right": "22", "value": 15},
//         {"id": "22", "left": null, "right": null, "value": 22},
//         {"id": "13", "left": null, "right": "14", "value": 13},
//         {"id": "14", "left": null, "right": null, "value": 14},
//         {"id": "5", "left": "2", "right": "5-2", "value": 5},
//         {"id": "5-2", "left": null, "right": null, "value": 5},
//         {"id": "2", "left": "1", "right": null, "value": 2},
//         {"id": "1", "left": null, "right": null, "value": 1}
//       ],
//       "root": "10"
//     }
//   }


// {
//     "tree": {
//       "nodes": [
//         {"id": "5000", "left": "5", "right": "55000", "value": 5000},
//         {"id": "55000", "left": null, "right": null, "value": 55000},
//         {"id": "5", "left": "2", "right": "15", "value": 5},
//         {"id": "15", "left": "5-2", "right": "22", "value": 15},
//         {"id": "22", "left": null, "right": "502", "value": 22},
//         {"id": "502", "left": "204", "right": null, "value": 502},
//         {"id": "204", "left": "203", "right": "205", "value": 204},
//         {"id": "205", "left": null, "right": "207", "value": 205},
//         {"id": "207", "left": "206", "right": "208", "value": 207},
//         {"id": "208", "left": null, "right": null, "value": 208},
//         {"id": "206", "left": null, "right": null, "value": 206},
//         {"id": "203", "left": null, "right": null, "value": 203},
//         {"id": "5-2", "left": null, "right": null, "value": 5},
//         {"id": "2", "left": "1", "right": "3", "value": 2},
//         {"id": "3", "left": null, "right": null, "value": 3},
//         {"id": "1", "left": null, "right": "1-2", "value": 1},
//         {"id": "1-2", "left": null, "right": "1-3", "value": 1},
//         {"id": "1-3", "left": null, "right": "1-4", "value": 1},
//         {"id": "1-4", "left": null, "right": "1-5", "value": 1},
//         {"id": "1-5", "left": null, "right": null, "value": 1}
//       ],
//       "root": "5000"
//     }