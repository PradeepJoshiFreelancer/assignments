/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const VOVELS = ['a', 'e', 'i', 'o', 'u']

function countVowels(str) {
  // Your code here
  console.log(2);

  let count = 0
  lower_str = str.toLowerCase()
  
  for (let i = 0; i < lower_str.length; i++) {
    find_index = VOVELS.indexOf(lower_str[i])
    if (find_index != -1) {
      count++
    }
  }
  return count
}
countVowels('hello')
module.exports = countVowels;