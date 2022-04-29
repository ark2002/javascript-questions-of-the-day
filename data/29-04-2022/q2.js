// given an array of lrngth n , return an number which occured atleast n/2 times in the array;

const atleastNby2 = (arr) => {
  const freqObj = arr.reduce((prev, curr) => {
    if (prev.hasOwnProperty(curr)) {
      return { ...prev, [curr]: prev[curr] + 1 }
    } else {
      return { ...prev, [curr]: 1 };
    }
  }, {})

  let Key = null;
  let Value = arr.length/2;
  for (let key in freqObj) {
    if ((freqObj[key] >= Value)) {
      Key = key;
      Value = freqObj[key];
    }
  }
  
  console.log("freq obj = ", freqObj);
  console.log("number that appears atleast n/2 times  = ", Key)
}

atleastNby2([1, 1, 1, 1, 2, 2,4,4,4,4,4,4,4,4])