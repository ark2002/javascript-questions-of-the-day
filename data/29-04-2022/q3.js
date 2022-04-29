// given an string return the first not repeating characters index if not any such return -1.

const noDuplicateChar = (string)=>{
  const StringObj = [...string].reduce((prev, curr,index) => {
    if (prev.hasOwnProperty(curr)) {
      return { ...prev, [curr]:{ "count":prev[curr]["count"]  + 1, index: index}}
    } else {
      return { ...prev, [curr]:{"count":1,"index":index}}};
  }, {})

  console.log("String object = ",StringObj);
  let Key=null;;

  for (let key in StringObj){
    if(StringObj[key]["count"]===1){
      Key = StringObj[key]["index"];
      break;
    }
  }

  console.log(`Index = ${Key!==null?Key:-1}`)
}




noDuplicateChar("aabbcdd");
