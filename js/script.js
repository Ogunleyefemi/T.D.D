
// function to count word
function wordCounter(word){
  if(word.trim().length === 0){
      return 0;
  }
  let Arr = word.split(" ");
  let counter = 0;
  Arr.forEach(function(element){
      counter++;
  })
       return counter;
};
// console.log(wordCounter(word));

// function to check number of occurence in a text
function numberOfOccurencesInText(word,text){
if (word.trim().length === 0){
  return 0
}
  let wordCount = 0;
  let occurence = text.split(" ");
  occurence.forEach(function(input){
    if(input.toLowerCase().includes(word.toLowerCase())){
      wordCount++;
    }
  });
  return wordCount
};
// console.log(numberOfOccurences(word,text));

// functionality
$(document).ready(function(){
$("#form").submit(function(event){
  event.preventDefault();
  let text1 = $("#inputText").val();
  let text2 = $("#word-to-count").val();
  let wordCount = wordCounter(text1);
  let Occur = numberOfOccurencesInText(text2,text1);
  $("#counts").html(wordCount);
  $("#wordToCount").html(text2);
  $("#occurence").html(Occur);



});

});