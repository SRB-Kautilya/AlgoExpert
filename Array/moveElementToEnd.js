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
