// 804 Unique Morse Code Words
// var uniqueMorseRepresentations = function(words) {
// let mors = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
// let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v" ,"w", "x", "y", "z"];
// let abcMors = {};
// for (let i = 0; i<abc.length; i++){
//     abcMors[abc[i]] = mors[i];
// };
// let wordsItem = "";
// let newMorsArr = [];
// let uniqueArr = [];
// for (let k = 0; k<words.length; k++){
//     wordsItem = words[k];
//     let newMorsItem = '';
//      for (let l = 0; l<wordsItem.length; l++)
//        newMorsItem += abcMors[wordsItem[l]];
//        newMorsArr.push(newMorsItem);
// }
// for(let m = 0; m < newMorsArr.length; m++)
// if(uniqueArr.includes(newMorsArr[m]) == false){
// uniqueArr.push(newMorsArr[m]);
// };
// let number = uniqueArr.length;
// console.log(number);
// }

// Words = ["gin", "zen", "gig", "msg"];
// uniqueMorseRepresentations(Words);
