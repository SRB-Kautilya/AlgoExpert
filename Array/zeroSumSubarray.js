
// A zero-sum subarray is any subarray where all of the values add up to zero.
// A subarray is any contiguous section of the array. For the purposes of this
// problem, a subarray can be as small as one element and as long as the
// original array.


function zeroSumSubArray(array){
let count  = 0;
let sums = new Set();

for(let arr of array){
    sums.add(count);
    count += arr;
    if(sums.has(count)) return true; 
}
return false
}

zeroSumSubArray([-1, 2, 3, 4, -5, 1, 2,-3])