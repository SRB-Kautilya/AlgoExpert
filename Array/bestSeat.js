function bestSeat(seats) {

    let bestSeat = -1;
    let maxSpace = 0;
    let left = 0;
    while (left < seats.length) {
        right = left + 1;
        while (right < seats.length && seats[right] === 0) {
            right += 1
        }

        avalaibleSpace = right - left - 1;
        bestSeat = Math.floor((left + right) / 2);
        maxSpace = avalaibleSpace;

    }
    left = right

}


