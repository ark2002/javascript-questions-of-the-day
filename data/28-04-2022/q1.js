//given an array and an integer target , check if there is any two numbers in an array such that they add up to the target value , return an array of those two numbers

const targetArray = (array , target) =>{

  for(let i = 0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
      if(array[i]+array[j]===target){
      return [array[i],array[j]];
    }
    }
  }
      return "there exists no such pair that equals to target";
}

console.log(targetArray([1,2,4,5],78));