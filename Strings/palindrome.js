//abcdcba
//if your reverse it should be the same 

function isPalindrome(string) {
    // Write your code here.
  let arr = string.split('');

  let left = 0;
    let right = arr.length-1;
   while(left < right){
     if(arr[left] === arr[right]){
       left++;
       right--
     }else{
       return false
     }
   }
  return true
  }

  console.log(isPalindrome('abcdcba'))