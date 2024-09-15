

function transposeMatrix(arr){
    let res = [];

    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr[i].length;j++){
            if(res[j]===undefined){
               res.push([])
            }
            res[j].push(arr[i][j])
        }
    }
return res;
}

let arr = [[1,2],[3,4],[5,6]]

console.log(transposeMatrix(arr))


// function transposeMatrix(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//    for(let j = 0;j<arr[i].length;j++){
//     if(res[j]== undefined) res.push([]);
//       res[j].push(arr[i][j])
//    }
//     }
//     return res;
// }