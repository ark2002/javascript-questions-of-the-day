// write a program that takes two strings and copies the smaller string into bigger string.

const stringMerge = (string1,string2) =>
  string1.length > string2.length ? console.log(string1.concat(" ",string2)):console.log(string2.concat(" ",string1));

stringMerge("hey","mario");

