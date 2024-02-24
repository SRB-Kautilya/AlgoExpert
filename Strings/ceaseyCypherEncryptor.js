function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const newKey = key % 26;
    const newletter = [];
    for(const letter  of string){
      newletter.push(getNewLetter(alphabets,letter,key))
    }
    
      return newletter.join('')
    }
    
     function getNewLetter(alphabets,letter,key){
       const newL = alphabets.indexOf(letter)+key
       return alphabets[newL%26]
     }


     caesarCipherEncryptor('xyx',2)
     //x+2 = z
    //  y+2 = a
    //  x+2 = b