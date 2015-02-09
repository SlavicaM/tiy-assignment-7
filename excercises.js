/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
//Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
  if (num1 > num2) {
    return "The largets number is: " + num1;
  }
  else {
    return "The largets number is: " + num2;
  }    //...
}
// call function :: return: "The largets number is: 8"
max(5,8);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  {
  if (num1 > num2)
  {
    return num1
  }
  else if (num2 > num3)
  {
    return num2;
  }
  else
  {
    return num3;
  }
}
    //...
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and 
// returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(arg0)
{
  switch (arg0){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
      break;
    default:
      return false;
      break;
  }
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, 
// and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// call function :: return:10
sum([1,2,3,4]);

function multiply(arr){
      var total = 1;
    for (i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}

// call function :: return:24
multiply([1,2,3,4]);

// ---------------------
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    return string.split("").reverse().join("");
}
// call function :: return: 
reverse("jag testar");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    for (var i=0; i < myArr.length; i++){   
    	if (i !== myArr.length) { // force to loop to reach last element
        var lngth = myArr[i].length;
        return "The longest word is " + myArr[i] + "; length: "  + lngth; 
        }  
    }
}
 // call function :: return: "The longest word is One; length: 3"
 findLongestWord("One","On", "O");

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function findLongestWord(words, num){
    var num;
    for (var i=0; i < words.length; i++){  
        //force loop to reach the last element 
    	if (i !== words.length) { 
    	  // get current length	
        var lngth = words[i].length;
          if (lngth > num) {
          	return "The length of words:" + lngth + " is longer then intiger:" + num;
          }
          else {
          	 return "The length of intiger:" + num + " is longer then words:" + lngth;
          }
        }  
    }
}
// call function :: return: "The length of words:3 is longer then intiger:1"
var myWords = ["One","On", "O"];
findLongestWord(myWords, 1);

/* ---------------------
   Write a function charFreq() that takes a string and builds a frequency listing of the 
   characters contained in it. Represent the frequency listing as a Javascript object. 
   Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab"). 
--------------------- */

function charFreq(string) {
    // create an empty object
    var freqChar = { };
    for (var i = 0; i < string.length; i++) {
        // get current character from the string
        var currChar = string.charAt(i);
        // 
        if (freqChar[currChar]) {
           freqChar[currChar]++; 
        } 
        else {
           freqChar[currChar] = 1;
        } 
    }
    return freqChar;
};

// call function :: return: Object {a: 7, b: 14, c: 3, d: 3}
charFreq("abbabcbdbabdbdbabababcbcbab");



