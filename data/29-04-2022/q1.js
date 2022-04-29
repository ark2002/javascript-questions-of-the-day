// given an array , move all the 0 to the end of the array without changing the relative positioning of rest of the eleements

const zeroShift =  (array) =>{

  const zeroshifted = array.reverse().reduce((prev,curr)=>{
    if (curr===0){
      return [...prev,curr]
    }else{
      return [curr,...prev]
    }},[]);

  return zeroshifted

}

console.log(zeroShift([0,1,0,0,8,2,0,3,0,1]));