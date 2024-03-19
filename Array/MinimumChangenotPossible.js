

//"coins": [5, 7, 1, 1, 2, 3, 22]

[1,1,2,3,5,7,22]  

function nonConstructibleChange(coins) {
    let arr = coins.sort((a,b)=>a-b)
    let val = 0;
for(let i=0; i< arr.length; i++){
   if(arr[i] > val+1) return val+1
   val = val+arr[i]
}


}