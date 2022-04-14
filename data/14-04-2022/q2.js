//given an array and two numbers , the function should replace all the enteries of the first number with the second one

const numberReplace = (array,oldNum,newNum) => console.log(array.map((num)=>num===oldNum?newNum:num));

numberReplace([1,1,2,1],2,5);