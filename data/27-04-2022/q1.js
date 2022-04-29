// given an obj the program should return the interchanged key to value. like the key should be value andd dthe value should be key 
//eg : obj ={"a":1} ; obj = {1:"a"};

const object = {
  "name":"doremon",
  "age":5,
  "haircolor":"none",
  "eyes":"oval"
}


const keyValueinterchange = (obj) =>{
  let newObject = {}
  for(const [key,value] of Object.entries(obj)){
    newObject = {...newObject,[value]:key };
  }
  console.log(newObject);
}

keyValueinterchange(object);