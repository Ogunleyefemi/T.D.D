function wordCounter(text){
    let Counter = 0;
    const wordArr = word.split(" ");
    wordArr.forEach(function(word) {
        Counter++;
    })
    return Counter;
};

console.log(wordCounter(text));