//write a program that marks all but the last four characters of a string "5565534276455423" to # ;

const encrypter = (string) =>
  console.log(string.slice(-4).padStart(string.length,"#"));

encrypter("5565534276455423");

const encrypterV2 = (string) =>
  console.log([...string].map((char,index)=>index>string.length-5?char:"#").join(""));

encrypterV2("5565534276455423");
