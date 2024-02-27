function firstNonRepeatingCharacter(string) {
    // Write your code here.
    //o(n+n) = o(2n) =  0(n ), and o(1)
    let obj = {}
    for(let i =0;i<string.length;i++){
      if(string[i] in obj){
         obj[string[i]] = -1
      }else{
        obj[string[i]]  = i;
      }
    }
  console.log(obj)
  for(const[char,value] of Object.entries(obj)){
    if(value !== -1){
      return value
    }
  }
    return -1;
  }

//   {
//     "string": "abcdcaf"
//   }
  //b