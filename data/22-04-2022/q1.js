//Given the cost price and selling price program should return the profit or the loss.

var readlineSync = require('readline-sync');

const profitFinder = ()=>{
  
const costPrice = readlineSync.question("what is the cost Price ? ");
const sellingPrice =  readlineSync.question("what is selling Price ? ");

const diffrence =  sellingPrice-costPrice;

 console.log(diffrence>0?`Profit is ${diffrence}`:
   diffrence<0?`Loss is ${Math.abs(diffrence)}`:
   "No profit no loss");
}


profitFinder();