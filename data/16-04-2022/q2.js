// write a program that converts string into uppercase

const convertToUpperCase = (string) => console.log(string.toUpperCase());

convertToUpperCase("hey its me mario")

//without method

const convertToUpperCaseV2 = (string) =>
  console.log([...string].map((char)=>
    char.charCodeAt() <= 96 || char.charCodeAt() >= 123 ? char : String.fromCharCode(char.charCodeAt()-32)).join(""))

convertToUpperCaseV2("hey its me mario")