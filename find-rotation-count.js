function findRotationCount(arr) {
    let LI = 0;
    let RI = arr.length - 1;

    while (LI < RI) {
        let midIdx = Math.floor((LI+RI)/2);
        if (arr[midIdx] > arr[midIdx + 1]) {
            return midIdx;
        }
        if (arr[LI] < arr[RI]) {
            return 0;
        } 
        if (arr[midIdx] < arr[RI]) {
            RI = midIdx;
        } else {
            LI = midIdx + 1;
        }
    }
}

module.exports = findRotationCount