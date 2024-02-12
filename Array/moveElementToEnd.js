// {
//     "array": [2, 1, 2, 2, 2, 3, 4, 2],
//     "toMove": 2
//   }


//0(n+m)
function moveElementToEnd(array, toMove) {

    let count = 0;
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === toMove) {
            count++
        } else {
            newArr.push(array[i])
        }

        for (let j = 0; j < count; j++) {
            newArr.push(toMove)
        }

    }
    return newArr
}


//o(n)
function moveElementToEnd(array, toMove) {

    let arr =[];
    let left = 0;
    let right = array.length-1;

    array.map((item,i)=>{
      if(item === toMove){
        arr[right] = item;
        right--
      }else{
        arr[left]= item;
        left++
      }

    })


}