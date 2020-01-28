var subtractProductAndSum = function(n) {
  let arr = String(n).split("");
  let plus = +arr[0];
  let multyply = +arr[0];
  for (i = 1; i < arr.length; i++) {
    plus = plus + +arr[i];

    multyply = multyply * +arr[i];
  }
  return multyply - plus;
};
console.log(subtractProductAndSum((n = 234)));
// Output: 15
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
