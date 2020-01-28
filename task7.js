
// var thirdMax = function(nums) {
//   let max1 = -Infinity;
//   let max2 = -Infinity;
//   let max3 = -Infinity;
//   let temp = -Infinity;
//   let temp2 = -Infinity;
//   let result = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (max1 < nums[i] && nums[i] != max1) {
//       temp = max1;
//       max1 = nums[i];
//       temp2 = max2;
//       max2 = temp;
//       max3 = temp2;
//     } else if (max2 < nums[i] && nums[i] != max1 && nums[i] != max2) {
//       temp = max2;
//       max2 = nums[i];
//       max3 = temp;
//     } else if (
//       max3 < nums[i] &&
//       nums[i] != max1 &&
//       nums[i] != max2 &&
//       nums[i] != max3
//     ) {
//       max3 = nums[i];
//     }
//   }
//   if (max3 == -Infinity) {
//     result = max1;
//   } else if (max2 == -Infinity) {
//     result = max1;
//   } else {
//     result = max3;
//   }
//   return result;
// };

// console.log(thirdMax([1, 2, -2147483648]));
// console.log(thirdMax([1, 2]));
// console.log(thirdMax([2, 2, 3, 1]));
// console.log(thirdMax([5, 2, 2]));
// console.log(thirdMax([3, 2, 1]));
