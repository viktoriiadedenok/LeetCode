var intersection = function(nums1, nums2) {
  let result = [];
  let hash = {};
  for (i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      hash[nums1[i]] = true;
    }
  }
  console.log(hash);
  for (let key in hash) {
    result.push(key);
  }
  return result;
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
