function semordnilap(words) {
    // Write your code here.
  const wordSet = new Set();
    const pairs = [];
    for(word of words){
      const reverse = word.split('').reverse().join('')
      if(wordSet.has(reverse)) pairs.push([word,reverse])
      else wordSet.add(word)
    }
    return pairs;
  }

  
//   {
//     "words": ["dog", "desserts", "god", "stressed"]
//   }

//   [
//     ["dog", "god"],
//     ["desserts", "stressed"]
//   ]