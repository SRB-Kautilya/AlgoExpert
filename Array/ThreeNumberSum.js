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