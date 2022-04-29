//given an array with diffrent counts of number we have to find the number with the least frequency and return it , if there is a clash send the larger number;

const leastFreq = (arr) => {
  const freqObj = arr.reduce((prev, curr) => {
    if (prev.hasOwnProperty(curr)) {
      return { ...prev, [curr]: prev[curr] + 1 }
    } else {
      return { ...prev, [curr]: 1 };
    }
  }, {})

  let minKey = null;
  let minValue = Infinity;
  for (let key in freqObj) {
    if ((freqObj[key] === minValue && key > minKey) || (freqObj[key] <= minValue)) {
      minKey = key;
      minValue = freqObj[key];
    }
  }
  
  console.log("freq obj = ", freqObj);
  console.log("min = ", minKey)
}

leastFreq([1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4])