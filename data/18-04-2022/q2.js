//write a program that removes the time from given string "Wed April 15, 7pm".It should return the date without the time.

const justDate = (string) =>{
  const textArray = string.split(",");
  console.log(textArray[0]);
}

justDate("Wed April 15, 7pm");