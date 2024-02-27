function commonCharacters(strings) {
    // Write your code here.
  let arr = []
  
    for(let letter of strings[0]){
      for(let i =1; i<strings.length;i++){
        if(strings[i].includes(letter) ){
         if(!arr.includes(letter)){
            arr.push(letter)
         }
       
        }else{
          arr.pop();
          break
        }
      }
  }
  console.log(arr)
  }

  commonCharacters(["abc", "bcd", "cbad"])