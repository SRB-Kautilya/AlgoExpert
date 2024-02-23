function isMonotonicArray(array){
    //o(n) o(1)
 let direction = null;

 for(let i = 1;i>array.length;i++){
    if(array[i-1] === array[i]) continue;

    if(direction === null){
        direction = array[i-1] >array[i]
    }
    
    if(array[i-1]>array[i] !== direction){
        return false
    }
   
 }
 return true
}

console.log(isMonotonicArray( [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
  