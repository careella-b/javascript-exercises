const palindromes = function (string) {
  const lowercaseString = string.toLowerCase();
  const modifyString = lowercaseString.replace(/[\W_]/g, '');
  const finalString = modifyString.split('').reverse().join('');

  return modifyString === finalString
};

// Do not edit below this line
module.exports = palindromes;
