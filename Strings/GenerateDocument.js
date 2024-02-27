
// {
//     "characters": "&*&you^a%^&8766 _=-09     docanCMakemthisdocument",
//     "document": "Can you make this document &"
//   }

function generateDocument(characters, document) {
    // Write your code here.
  
  let obj = {}
  let obj1 = {}
  
  // if(characters.length !== document.length){
  //   return false
  // }
  for(let string of characters){
    if(string in obj ){
      obj[string]++ ;
    }else{
      obj[string] = 1
    }
  }
  
  for(let string of document){
  console.log('tes',string)
    if(string in obj1 ){
      obj1[string]++ ;
    }else{
      obj1[string] = 1
    }
  }
  console.log(obj,obj1)
    
  
  for(let [char, count] of Object.entries(obj1)){
  console.log(obj1[char],count)
    if(obj[char] === undefined || obj[char] < count){
      return false
    }
  }
    
    return true;
  }