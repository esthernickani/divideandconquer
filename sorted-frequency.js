function sortedFrequency(arr, num) {
    let firstOccurence = findFirstNum(arr, num)
    let lastOccurence = findLastNum(arr, num)

    if (firstOccurence < arr.length && lastOccurence < arr.length) {
        let frequency = lastOccurence - firstOccurence + 1;
        return frequency;
    } else {
        return -1;
    }

}

const findFirstNum = (arr, num) => {
    let LI = 0;
    let RI = arr.length - 1;

    while (LI <= RI) {
        let middleIdx = Math.floor((LI+RI)/2)
        if (arr[middleIdx] >= num) {
                RI = middleIdx - 1;
        } else if (arr[middleIdx] < num) {
            LI = middleIdx + 1;
        }
    }

    let firstOccur = LI;
    return firstOccur;
}

const findLastNum = (arr, num) => {
    let LI = 0;
    let RI = arr.length - 1;

    while (LI <= RI) {
        let middleIdx = Math.floor((LI+RI)/2)
        if (arr[middleIdx] <= num) {
                LI = middleIdx + 1;
        } else if (arr[middleIdx] > num) {
            RI = middleIdx - 1;
        }
    }

    let lastOccur = RI;
    return lastOccur;
}

/*module.exports = sortedFrequency*/