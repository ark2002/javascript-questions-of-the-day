//given an array with diffrent counts of number we have to find the number with the most frequency and return it , if there is a clash send the larger number;

const mostFreq = (arr) => {
  const freqObj = arr.reduce((prev, curr) => {
    if (prev.hasOwnProperty(curr)) {
      return { ...prev, [curr]: prev[curr] + 1 }
    } else {
      return { ...prev, [curr]: 1 };
    }
  }, {})

  let maxKey = null;
  let maxValue = null;
  for (let key in freqObj) {
    if ((freqObj[key] === maxValue && key > maxKey) || (freqObj[key] >= maxValue)) {
      maxKey = key;
      maxValue = freqObj[key];
    }
  }
  
  console.log("freq obj = ", freqObj);
  console.log("max = ", maxKey)
}

mostFreq([1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4])