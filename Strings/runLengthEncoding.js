function runLengthEncoding(string) {
    // Write your code here.
    const arr = [];
    let count = 1;
    for(let i = 1; i<string.length;i++){
      const curr = string[i];
      const prevCurr = string[i-1];
      if(curr !== prevCurr || count ===9 ){
        arr.push(count.toString())
        arr.push(prevCurr);
        count= 0
      }
      count++
    }
  arr.push(count.toString());
    arr.push(string[string.length-1])
    return arr.join('')
  }


  



  //{
//   "string": "AAAAAAAAAAAAABBCCCCDD"
// }
//9A4A2B4C2D

// {
//     "string": "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"
//   }
//9*3*7^6$7%6!9A9A2A

