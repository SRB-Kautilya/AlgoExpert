// //{
//     "array": [12, 3, 1, 2, -6, 5, -8, 6],
//     "targetSum": 0
//   }

// [
//     [-8, 2, 6],
//     [-8, 3, 5],
//     [-6, 1, 5]
//   ]

function threeNumberSum(array, targetSum) {
    let arr = array.sort(a,b=>a-b);
    let newArr = [];
    
    for(let i = 0;i<arr.length-2;i++){
        let left = i+1;
        let right = arr.length-1;
      while(left<right){
        sum = arr[i]+ arr[left]+ arr[right];
        if(sum === targetSum){
        newArr.push([arr[i],arr[left],arr[right]])
        left++;
        right--
        }else if(sum < targetSum){
            left++
        }else{
            right--
        }
      }
    }
    return newArr
}