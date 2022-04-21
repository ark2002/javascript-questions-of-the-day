// A program that counts the value of each character and prints the most repeated character.

const charCount = (string)=>{
  let charCounter =[...string].reduce((prev,curr)=>{
    if (prev.chars.includes(curr)){
      return {...prev,[curr] : prev[curr]+1};
    }else{
       let a = [prev.chars.push(curr)]
      let b = {...prev,[curr]:1}
      return a,b;
    }},{chars:[]})
  
    console.log(charCounter.chars.reduce((prev,curr)=>{ 
      if(charCounter[prev]!==undefined){
         return charCounter[prev]>charCounter[curr]?prev:curr;
      }else{
        return curr;
      }}," "))
}

charCount("iiihoooo");

