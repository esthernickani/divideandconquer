function findFloor(arr, num) {
  let LI = 0;
  let RI = arr.length - 1;
  let floor = -1;
   while (LI <= RI) {
      let middleIdx = Math.floor((LI+RI)/2)
      if (arr[middleIdx] > num) {
        RI = middleIdx - 1;
      } else if (arr[middleIdx] <= num) {
        LI = middleIdx + 1;
        floor = arr[middleIdx]
      }
   }
  
   return floor;
}

module.exports = findFloor