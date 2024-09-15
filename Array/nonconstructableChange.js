function nonConstructibleChange(coins) {
    let minChange = 0;
    coins.sort((a, b) => a - b);

    for (let i = 0; i < coins.length; i++) {
       if(coins[i]>minChange+1) return minChnage+1;
       minChange += coins[i]
    }
}


// {
//     "coins": [5, 7, 1, 1, 2, 3, 22]
//   }