//given an array of size k break the array in length of k chunks and return an array ;

const breakArray = (array, k) => {
  let innerArr = [];
  let outerArr = [];
  for (let i = 0; i < array.length; i++) {
    if ((i + 1) % k === 0 || i===array.length-1) {
      innerArr.push(array[i]);
      outerArr.push(innerArr);
      innerArr = [];
    } else {
      innerArr.push(array[i]);
    }
  }
  return outerArr;
}

console.log(breakArray([1, 2, 3, 4, 5, 6, 7, 8, 9,10], 3))