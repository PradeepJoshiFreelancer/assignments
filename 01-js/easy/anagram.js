/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2){

  //remove and spaces and wide spaces and change the string to lower case
  str1 = str1.replace(/\s+/g, '').toLowerCase()
  str2 = str2.replace(/\s+/g, '').toLowerCase()
  if (str1.length !== str2.length){
      return false
  }

  //sort the two stings
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')

  //return if the string is an Anagram
  return str1 == str2

}

module.exports = isAnagram