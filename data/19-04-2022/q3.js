//Reverse the given string word wise .ie:"its me mario" should return " mario me its"

const reverseString = (string) =>{
    console.log(string.split(" ").reverse().join(" "));
}

reverseString("its me mario")