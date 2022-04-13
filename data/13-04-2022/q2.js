//Given an array and an item, function should return the index at which item is present;

const indexOf = (array,item)=>{
  array.includes(item)?console.log("1. Index of element in array",array.indexOf(item))
    :console.log("item not in array");
    
}

indexOf([1,2,3,4,5],2);

const indexOfUsingReduce = (array,item)=>{
  
  array.includes(item)?
  console.log("2. Index of element in array",array.reduce((acc,curr,currindex)=>
    curr===item?acc=+currindex:acc,0))
    :console.log("item not in array");
} 

indexOfUsingReduce([1,2,3,4,5],3);