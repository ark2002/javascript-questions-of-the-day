//write a javascript program to calculate the sum of ll the characters of the string.

const sumOfDigits = (string) =>{
const digitsArray = ["1","2","3","4","5","6","7","8","9","0"];

[...string].every((val)=>digitsArray.includes(val))?
console.log([...string].reduce((prev,curr)=>prev+Number(curr),0)):console.log("All items in the string should be number")
}

sumOfDigits("12346")