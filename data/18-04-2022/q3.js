//Given an input string S that contains multiple words, you need to remove all the spaces from the input string. there can be multiple spaces after a given word.

const removeSpace = (string) => console.log(string.replaceAll(" ",""));

removeSpace("hi Hello  Its   Me   Mario");

//without method

const removeSpaceV2 = (string) => 
  console.log([...string].filter((char)=>char!==" ").join(""));

removeSpaceV2("hi Hello  Its   Me   Mario");