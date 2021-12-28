
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/
let prevIndex = -1;
let currIndex = -1;
function answerQuestion() {
  let answers = ["absolutely not", "there is a slight possibility", "perhaps in another life", "don't count on it", "better ask your mom", "as likely as the release of Half Life 3", "why are you asking me, of all people?", "get a life", "mayhaps", "uhhh... I good and bad news", "money first, my predictions ain't free", "I'm sensing some good vibes", "whatever your guts tell you", "oui oui", "stars aligning favourably today", "I dunno ask Google maybe", "that sounds good", "absolutely 100% positive", "yes yes yes", "just do it"];
  currIndex = getRandomIntInclusive(0, answers.length - 1);
  //re-generate the number as long as it's equal to the previous index 
  while (prevIndex == currIndex)
    currIndex = getRandomIntInclusive(0, answers.length - 1);
  makeAnswerAppear(answers[currIndex]);
  prevIndex = currIndex;
    
}
