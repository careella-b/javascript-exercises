const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arrNum) {
  let total = 0;
  for(let i = 0; i < arrNum.length; i++) {
    total += arrNum[i]
  }
	return total;
};

const multiply = function(arrNum, n) {
  let total = 1;
  for(let i = 0; i < arrNum.length; i++){
    total *= arrNum[i]
  }
  return total
};

const power = function(numOne, numTwo) {
  return Math.pow(numOne, numTwo);
	
};

const factorial = function(n) {
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
