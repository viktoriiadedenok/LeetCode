// var uniqueOccurrences = function(arr) {
//   let testObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in testObj === false) {
//       testObj[arr[i]] = true;
//       testObj[arr[i]] = 1;
//     } else {
//       testObj[arr[i]] = testObj[arr[i]] + 1;
//     }
//   }
//   let result = true;
//   let nextObj = {};
//   for (let key in testObj) {
//     if (nextObj[testObj[key]] == undefined) {
//       nextObj[testObj[key]] = true;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// };
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, -3, 10, 0]));
