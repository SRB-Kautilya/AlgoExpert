// {
//     "array": [2, 5, -3, -4, 6, 7, 2]
//   }

//   output [5, 6, 6, 6, 7, -1, 5]


  


function nextGreaterElement(array) {
    // Write your code here.
    let newArr = [];
   
    for(let i=0;i<array.length;i++){
       let pointer = i+1
      while(pointer <= array.length){
        if(array[i]<array[pointer]){
          newArr[i] = array[pointer];
          // pointer++
           break;
        }else{
          pointer++
          if(pointer >= array.length){
            pointer = 0;
          }
          if(pointer === i){
            newArr[i] = -1;
            break
          }
          
        }
      }
    }
    return newArr;
  }


  function nextGreaterElement(array) {
    // Write your code here.
    const stack = [];
    const result = new Array(array.length).fill(-1)
  
    for(let i=0; i< 2*array.length;i++){
      let circularIdx = i%array.length;
      while(stack.length>0 && array[stack[stack.length-1]]<array[circularIdx]){
        const top = stack.pop();
        result[top] = array[circularIdx]
      }
        stack.push(circularIdx)
      
    }
    
    return result;
  }

  nextGreaterElement()