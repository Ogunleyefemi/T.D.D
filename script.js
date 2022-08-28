function wordCounter(text){
    // to check for empty string
    if (text.length === 0){
        return 0;
    }
    let Counter = 0;
    const wordArr = word.split(" ");
    wordArr.forEach(function(word) {
        Counter++;
    })
    return Counter;
};