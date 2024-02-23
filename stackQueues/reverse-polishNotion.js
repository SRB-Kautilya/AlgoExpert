// tokens = [50,3,17,+,2,-,/]

// 2 (50/((3+17)-2))

function reversePolishNotation(tokens) {
    // Write your code here.
   // time  o(n) space o(n)
    const stack = []
    for( let token of tokens){
      if(token === '+'){
        stack.push(stack.pop()+stack.pop())
      }else if(token === '-'){
        let firstNum = stack.pop();
        stack.push(stack.pop()-firstNum)
      } else if(token === '*'){
        stack.push(stack.pop()*stack.pop())
      }else if(token === '/'){
        const firstNum = stack.pop();
        stack.push(Math.trunc(stack.pop()/firstNum));
      }else{
        stack.push(Number(token))
      }
    }
    return stack.pop();
  }


