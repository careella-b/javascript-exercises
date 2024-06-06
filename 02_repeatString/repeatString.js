const repeatString = function(word, times) {
    if(times < 0) return "ERROR";
    let givenString = "";

    for(let i = 0; i < times; i++ ) {
        givenString += word;
    }
    return givenString;
};

// Do not edit below this line
module.exports = repeatString;
