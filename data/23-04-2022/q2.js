// given two dates the function should return the which one comes before the other.

const minDate = (date1,date2) =>{
  const getDate1 = new Date(date1.split('/').reverse());
  
  const getDate2 = new Date(date2.split('/').reverse());

  console.log(getDate1===getDate2?date1:getDate1>getDate2?date2:date1);
}

minDate('1/04/2004','1/02/2002');