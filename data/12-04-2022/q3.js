//write a function that genrates a secretCode by shifting the characters by n places; ie. for n = 2 : a--c b--d  

const encodedString = (inputString,num) => 
  console.log(String.fromCharCode(...[...inputString].map((char)=>char.charCodeAt(0)+num)));

encodedString("neogcamp",3);

// for better readability 

const encodedStringV2 = (inputString,num) =>{
  
  const encodedAsciiArray = [...inputString].map((char)=>char.charCodeAt(0)+num);
  
  const outputString = String.fromCharCode(...encodedAsciiArray);
  
  console.log(outputString);
}

encodedStringV2("neogcamp",2);
