function wordCounter(text){
    // to check for empty string
    if (text.trim().length === 0){
        return 0;
    }
    let Counter = 0;
    const wordArr = text.split(" ");
    wordArr.forEach(function(word) {
        // logic tocheck for number
        if(!Number(word)){
        Counter++;
        }
    })
    return Counter;
};