var intersect = function(nums1, nums2) {
  let result = [];
  for (i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i]);
      nums2.splice(nums2.indexOf(nums1[i]), 1);
    }
  }
  return result;
};
console.log(intersect([1, 2, 2, 1], [2, 2])); //22
console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5])); //94
console.log(intersect([1, 2], [2, 1]));
