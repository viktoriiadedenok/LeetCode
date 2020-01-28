
// var selfDividingNumbers = function(left, right) {
//   let newArr = [];
//   for (let i = left; i <= right; i++) {
//     if (i % 10 == 0) continue;
//     const strNumb = String(i);
//     let result = true;
//     for (let k = 0; k < strNumb.length; k++) {
//       if (i % strNumb[k] !== 0) {
//         result = false;
//       }
//     }
//     if (result == true) {
//       newArr.push(i);
//     }
//   }
//   console.log(newArr);
// };
// selfDividingNumbers(1, 22);
// (left = 1), (right = 22);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
