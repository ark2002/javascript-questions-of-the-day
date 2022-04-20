// given a string and index the function should return the character at the index

const charAt = (string,inputIndex) =>
  console.log([...string].reduce((prev,curr,currIndex)=>currIndex===inputIndex?curr:prev,""));

charAt("neogCamp",1);