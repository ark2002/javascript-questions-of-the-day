//A program that reads the string and counts the number of characters in it

const charCount = (string) => console.log(string.length);

charCount("Its me Mario");

// without function

const charCountV2 = (string) =>{
  let count = 0;
  [...string].map((char)=>count++);
  console.log(count);
}

charCountV2("Its me Mario");