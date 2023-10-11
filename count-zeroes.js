const countZeroes = (arr) => {
  let LI = 0;
  let RI = arr.length - 1;

  while (LI <= RI) {
    let middleIdx = Math.floor((LI+RI)/2)
    if (arr[middleIdx] === 1) {
      LI = middleIdx + 1
    } else if (arr[middleIdx] === 0) {
      RI = middleIdx - 1
    }
  }

  let countOfZeroes = arr.length - LI;
  return countOfZeroes;
}

/*module.exports = countZeroes*/