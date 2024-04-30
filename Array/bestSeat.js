
// in array you have to find best seat, 0's is empty seat and 1's filled. first and last always filled in array with 1's.
//   You may assume that someone is always sitting in the
//   first and last seat of the row. Whenever there are two equally good seats,
//   you should sit in the seat with the lower index. If there is no seat to sit
//   in, return -1. The given array will always have a length of at least one
//   and contain only ones and zeroes.

function bestSeat(arr){
  let bestSeat = -1;
  let left = 0;
  let maxSpace = 0;
  
  while(left < arr.length){
    right = left+1;
  
while(right<arr.length && arr[right]===0){
  right++;
}

let availableSpace = right -left -1;
if(availableSpace > maxSpace){
  bestSeat = Math.floor((left+right)/2);
  maxSpace = availableSpace
}

left = right


}
return bestSeat
}
console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]))
console.log(bestSeat([ 1]))

