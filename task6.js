
// var buddyStrings = function(A, B) {
//   let tempString = "";
//   let count = 0;
//   let aStr = "";
//   let bStr = "";
//   if (A == B) {
//     for (let i = 0; i < A.length; i++) {
//       if (tempString.includes(A[i])) {
//         return true;
//       } else {
//         tempString = tempString + A[i];
//       }
//     }
//     return false;
//   } else {
//     for (let i = 0; i < A.length; i++) {
//       if (A != B) {
//         if (A[i] != B[i]) {
//           count = count + 1;
//           aStr = aStr + A[i];
//           bStr = B[i] + bStr;
//         }
//       }
//     }
//     if (aStr != bStr) {
//       count += 1;
//     }
//     return count == 2;
//   }
// };
// console.log(buddyStrings("ab", "ba")); //true
// console.log(buddyStrings("aa", "aa")); //true
// console.log(buddyStrings("ab", "ab")); //false
// console.log(buddyStrings("abab", "abab")); //true
// console.log(buddyStrings("aaaaaaabc", "aaaaaaacb")); //true
// console.log(buddyStrings("", "aa")); //false
