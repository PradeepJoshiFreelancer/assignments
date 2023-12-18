/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var spaceRE = /\s+/g;
  //remove and spaces and wide spaces and change the string to lower case
  let str1 = str.replace(punctRE, '').replace(spaceRE, '').split('').join('').toLowerCase()

  //reverse the two stings
  let str2 = str.replace(punctRE, '').replace(spaceRE, '').split('').reverse().join('').toLowerCase()
  //return if the string is an Anagram
  return str1 == str2
}
module.exports = isPalindrome;
