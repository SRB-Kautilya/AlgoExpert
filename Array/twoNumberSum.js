function twoNumberSum(array, targetSum) {

    array.sort((a, b) => a - b);

    let pointer1 = 0;
    let pointer2 = array.length - 1;
    let arr = [];


    while (pointer1 !== pointer2 ) {
        let count = array[pointer1] + array[pointer2];
        if (count < targetSum) {
            pointer1++
        } else if (count > targetSum) {
            pointer--
        } else {
            arr.push(array[pointer1])
            arr.push(array[pointer2])
            return arr
        }
    }
    return arr
}



// {
//     "array": [3, 5, -4, 8, 11, 1, -1, 6],
//     "targetSum": 10
//   }