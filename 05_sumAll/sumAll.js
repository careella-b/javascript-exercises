const sumAll = function(startNum, endNum) {
    let totalSum = 0;

    if(!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR";
    if(startNum < 0 || endNum < 0) return "ERROR";
    
    if(startNum < endNum) {
        for(let i = startNum; i <= endNum; i++ ) {
            totalSum += i;
        }
    } else {
        for (let i = endNum; i <= startNum; i++) {
            totalSum += i;
        }
    }
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
