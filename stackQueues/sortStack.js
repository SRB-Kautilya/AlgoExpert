//[-5, 2, -2, 4, 3, 1]


function sortStack(stack) {
    // Write your code here.
  
    if(stack.length===0) return stack;  
    let top = stack.pop();
    sortStack(stack)
    sortOrder(top,stack)
    
    console.log(stack)
    return stack;
  }
  
  function sortOrder(top,stack){
    if(stack.length===0 || stack[stack.length-1]<=top){
      stack.push(top);
      return
    }
    let popVal = stack.pop();
    sortOrder(top,stack)
    stack.push(popVal)
  }


  sortStack([-5, 2, -2, 4, 3, 1])