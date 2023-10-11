function findRotatedIndex(arr, num) {
    let LI = 0;
    let RI = arr.length - 1;
    let pivot = 0;
    let foundIdx = -1;

    while (LI <= RI) {
        let mid =  Math.floor((LI + RI)/ 2)
        if (arr[mid] > arr[mid + 1]) {
            pivot = mid;
            break;
        } else if (arr[mid] < arr[mid + 1]) {
            LI = mid;
        } else {
            LI = mid + 1;
        }
    }
    
    foundIdx = searchFirstArr(arr, num, pivot)
    
    if (foundIdx === -1){
        foundIdx = searchSecondArr(arr, num, pivot)
    }

    return foundIdx;
}

function searchFirstArr(arr, num, pivot) {
    let LIfirst = 0;
    let RIfirst = pivot;
    
    while (LIfirst <= RIfirst) {
        let midIdx = Math.floor((LIfirst + RIfirst)/2)
        if (arr[midIdx] < num) {
            LIfirst = midIdx + 1
        } else if (arr[midIdx] > num) {
            RIfirst = midIdx - 1
        } else {
            return midIdx;
        } 
    }
    return -1;
}

function searchSecondArr(arr, num, pivot) {
    let LIsecond = pivot + 1;
    let RIsecond = arr.length - 1;
    
    while (LIsecond < RIsecond) {
        let midIdx = Math.floor((LIsecond + RIsecond)/2)
        if (arr[midIdx] < num) {
            LIsecond = midIdx + 1
        } else if (arr[midIdx] > num) {
            RIsecond = midIdx - 1
        } else {
            return midIdx;
        }
    }
    return -1;
}

module.exports = findRotatedIndex