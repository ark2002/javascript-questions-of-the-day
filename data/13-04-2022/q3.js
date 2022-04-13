//Given a sentence return first letter of all words as capital.

const toSentenceCase =(sentence) =>{
  console.log(sentence.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
} 

toSentenceCase("we are neoGrammers")

// for better code readability:

const toSentenceCaseV2 = (sentence) =>{
  const splitArray = sentence.split(" ");
  const capitalizedArray = splitArray.map((word)=>word.charAt(0).toUpperCase() + word.slice(1));
  const newCapitalizedSentence = capitalizedArray.join(" ");

  console.log(newCapitalizedSentence);
}

toSentenceCaseV2("we are neoGrammers v2")