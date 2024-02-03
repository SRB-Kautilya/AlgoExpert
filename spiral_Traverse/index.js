let array = [
    [1, 2, 3, 4],
[  12, 13, 14, 5],
 [11, 16, 15, 6],
  [10, 9, 8, 7]
  ]

  //output :  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
 
 
 
 
 
 function spiralTraverse(array){
// with the help of loop over i am pushining all the borders in to new array 

const result = [];
let startRow = 0;
let endRow = array.length-1;
let startCol = 0;
let endCol = array[0].length-1;

while(startRow <= endRow && startCol <= endCol){

    for(let col =0; col <= endCol; col++){
     result.push(array[startRow][col])
    }

    for(let row = startRow+1; row <= endRow; row++){
        result.push(array[row][endCol])
    }

    for(let col = endCol-1; col >= startCol; col--){
        if(endRow>startRow){
        result.push(array[endRow][col])
        }
    }
    for(let row = endRow-1; row >= endRow;endRow--){
        if(endCol > startCol){
        result.push(array[row][startCol])
        }
    }

     startCol++;
     endCol--;
     startRow++;
     endRow--;
}



console.log(result)

 }

 spiralTraverse(array)