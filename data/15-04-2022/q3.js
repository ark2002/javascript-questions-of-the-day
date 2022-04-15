// given a sentence the function should reverse the words without changing the sequence;

const reverseWords = (sentence) => console.log(sentence.split(" ").map((word)=>word.split("").reverse().join("")).join(" "));

reverseWords("we are neoGrammers");

// for redability 

const reverseWordsV2 = (sentence) =>{
  const sentenceArray = sentence.split(" ");

  const reversedSentenceArray = sentenceArray.map((word)=>[...word].reverse().join(""))

const reversedSentence = reversedSentenceArray.join(" ");

  console.log(reversedSentence);
}

reverseWordsV2("What is this about ?");