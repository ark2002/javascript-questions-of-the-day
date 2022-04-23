const readlineSync =  require('readline-sync');

const numRotator = () => {

  let originalNum = readlineSync.question('Enter a number : ');
  const rotations = readlineSync.question('Enter the number of rotations : ');
  let output =[...originalNum]; 
  for (let i=0;i<rotations;i++){
    let num = output.pop();
      output =[num,...output]
  }
  console.log(output.join(""))
}

numRotator();