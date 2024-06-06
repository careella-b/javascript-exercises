const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"; 
    }

    let numArray = [0,1];
    let count;

    for(let i = 2; i <= num; i++) {
        numArray[i] = numArray[i - 1] + numArray[i - 2];
  
    }
    return numArray[num];
    
};

// Do not edit below this line
module.exports = fibonacci;
