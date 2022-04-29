//given an array of numbers , write a function to pick any two numbers a and b from the array such that we could get the diffrence by Maths.abs(a-b) . get the largest diffrence 

const largestDiffrence = (arr) => {
  let max = -Infinity;
  let min = Infinity;
  for (let i=0;i<arr.length;i++){
    if (arr[i]>max){
      max = arr[i];
    }
    if (arr[i]<min){
      min = arr[i];
    }
  }
  console.log (Math.abs(max-min));
}

largestDiffrence([-1,-2,-3,-4])
