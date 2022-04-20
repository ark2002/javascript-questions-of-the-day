//write a program to take a day as input and determine whether it is weekday or weekend;

const whichDay = (day) => {
  const weekDays = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY"];
  const weekEnds = ["SUNDAY","SATURDAY"];

  if (day){
  if (weekDays.includes(day.toUpperCase()))
      console.log(`${day} is a weekday`);
   else if (weekEnds.includes(day.toUpperCase()))
      console.log(`${day} is a weekend`);
  else
     console.log(`${day} is not a day of the week`);
  }
  else 
    console.error("This function requires you to enter a day of the week")
}

whichDay()