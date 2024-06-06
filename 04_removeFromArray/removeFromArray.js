const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((val) => {
        if(!args.includes(val)) {
            newArray.push(val);
        }
    });
    return newArray
};

// const removeFromArray = function(newArray, ...args) {
//     return newArray.filter(val => !args.includes(val))
// };


// Do not edit below this line
module.exports = removeFromArray;
