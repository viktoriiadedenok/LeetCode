var largestTimeFromDigits = function(A) {
  let Arr = [];
  let numArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] != undefined) {
      numArr.push(
        String(A[i]) + String(A[i + 1]),
        String(A[i + 1]) + String(A[i])
      );
    }
    if (A[i + 2] != undefined) {
      numArr.push(
        String(A[i]) + String(A[i + 2]),
        String(A[i + 2]) + String(A[i])
      );
    }
    if (A[i + 3] != undefined) {
      numArr.push(
        String(A[i]) + String(A[i + 3]),
        String(A[i + 3]) + String(A[i])
      );
    }
  }

  numArr = numArr.filter(function(item) {
    return item < 60;
  });
  console.log(numArr);

  let hour = 0;
  for (let elem in numArr) {
    if (numArr[elem] > hour && numArr[elem] < 24) {
      hour = numArr[elem];
    }
  }

  for (let elem of A) {
    if (String(A[elem]) == hour[0]) {
      A.splice(elem, 1);
    }
    if (String(A[key]) == hour[1]) {
      A.splice(elem, 1);
    }
  }
  console.log(A);

  let minute = "";
  if (+(String(A[0]) + String(A[1])) > +(String(A[1]) + String(A[0]))) {
    minute = +(String(A[0]) + String(A[1]));
  } else {
    minute = +(String(A[1]) + String(A[0]));
  }

  let result = "";
  result = String(hour) + ":" + String(minute);
  return result;
};
// console.log(largestTimeFromDigits([1, 2, 3, 4]));
console.log(largestTimeFromDigits([0, 2, 6, 6]));
