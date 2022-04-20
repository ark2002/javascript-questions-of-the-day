//given n numbers the function should return maximu of them all , number of paraemeneters wont be given to the user 

//hint : use rest parameters

const findMax = (...numbers) =>
  console.log(numbers.reduce((prev,curr)=>prev>curr?prev:curr,0));

findMax(1,4,2,8,7,9,2);