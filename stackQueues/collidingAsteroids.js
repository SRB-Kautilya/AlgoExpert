function collidingAsteroids(asteroids) {
    // Write your code here.
    // [-3, 5, -8,6,7,-4,-7]

    // output[-3,-8,6]
   const stack = [];
  
    for(const asteroid of asteroids){
          if(asteroid>0){
            stack.push(asteroid);
            continue;
          }
  
      while(true){
        const stackIdx = stack.length-1
        if(stack.length===0 || stack[stackIdx] <0){
          stack.push(asteroid);
          break;
        }
        const asteroidSize = Math.abs(asteroid);
        if(stack[stackIdx]>asteroidSize){
          break
        }
  
        if(stack[stackIdx] === asteroidSize){
          stack.pop();
          break;
        }
         stack.pop();
      }
      
    }
    
    return stack;
  }