var relativeSortArray = function(arr1, arr2) {
  let arr = [];
  let aaR = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        arr.push(arr1[j]);
      }
      if (!arr2.includes(arr1[j])) {
        console.log(arr1[j]);
      }
    }
  }
  //   console.log(arr, aaR);
};
console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
