// {
//     "array": [5, 1, 22, 25, 6, -1, 8, 10],
//     "sequence": [1, 6, -1, 10]
//   }


//o(n) 0(1) 
function ValidateSubsequence(array, sequence) {

    const pointer = 0;
    const sequenceIndex = 0;

    if (sequenceIndex.length > array.length) {
        return false
    }

    for (let i = 0; i < array.length; i++) {

        if ( array[i] === sequence[sequenceIndex]) {
            pointer = i;
            sequenceIndex++;
        } 
    }
    return sequenceIndex === sequence.length;


}