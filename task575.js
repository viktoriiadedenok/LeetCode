var distributeCandies = function(candies) {
  let hash = {};
  for (let i = 0; i < candies.length; i++) {
    if (hash[candies[i]] === undefined) {
      hash[candies[i]] = true;
    }
  }

  let result = "";
  if (Object.keys(hash).length > candies.length / 2) {
    result = candies.length / 2;
  } else {
    result = Object.keys(hash).length;
  }
  return result;
};
console.log(distributeCandies([1, 1, 2, 3]));
