function sortedSquaredArray(array) {
let arr = [];
    let left = 0
    let right = array.length - 1;
    for(let i = array.length-1;i>=0;i--){

        if (Math.abs(array[left]) > Math.abs(array[right])) {
            arr[i] = array[left] * array[left];
           left++
        } else{
             arr[i] = array[right] * array[right];
        //    left++
             right--
        }

    }
    return arr;
}
[-10, -5, 0, 5, 10]

//[0,25,25,100,100]

// function sortedSquaredArray(array) {
//     let arr = new Array(array.length).fill(0);
//         let mini = 0;
//         let maxi = array.length-1;
        
        
//         // o(n) time 
//         for(let i = array.length-1;i>=0;i--){
//         let smallVal = array[mini];
//             let largeVal = array[maxi];
//             if(Math.abs(smallVal)> Math.abs(largeVal)){
//           arr[i] = smallVal*smallVal;
//                 mini++
//             }else{
//                  arr[i] = largeVal*largeVal;
//                 maxi--;
//             }
        
//         }
//       // Write your code here.
//       return arr;
//     }

console.log(sortedSquaredArray([-10, -5, 0, 5, 10]))

[100, 25]