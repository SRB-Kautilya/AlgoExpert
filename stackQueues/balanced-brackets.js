function balancedBrackets(string) {
    // Write your code here.
    const openBrackets = '([{';
    const closeBrackets = ')]}';
    const obj = {')':'(',']':'[','}':'{'};
    const stack = [];
    for(const char of string){
      if(openBrackets.includes(char)){
        stack.push(char);
      }else if(closeBrackets.includes(char)){
        console.log(stack)
        if(stack.length === 0){
          return false;
        }
      if(stack[stack.length-1]===obj[char]){
        stack.pop()
      }else{
        return false;
      }
      }
    }
  
    return stack.length === 0
  }
  
  