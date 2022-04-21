//given a 3 angles of a triangle the function should return if its equilateral , isosceles ,scalene or not a trinagle at all.

const typeOfTriangle = (a,b,c) =>
  console.log(a+b+c===180?(a===b&&b===c?"Triangle is equilateral":a===b || b===c || a===c ?"Triangle is isocles":"Triangle is scalene"):"Not A Triangle");

typeOfTriangle(50,50,70);