var maxNumberOfBalloons = function(text) {
  let word = "balon";
  for (let j = 0; j < word.length; j++) {
    if (text.includes(word[j])) {
      let hash = {};
      for (let i = 0; i < text.length; i++) {
        if (hash[text[i]] === undefined) {
          hash[text[i]] = 1;
        } else {
          hash[text[i]] = hash[text[i]] + 1;
        }
      }

      let arr = [];
      for (let key in hash) {
        if (key === "b" || key === "a" || key === "n") {
          arr.push(hash[key]);
        } else if (key === "l" || key === "o") {
          arr.push(Math.floor(hash[key] / 2));
        }
      }
      arr.sort((a, b) => a - b);
      return arr[0];
    } else {
      return 0;
    }
  }

  let hash = {};
  for (let i = 0; i < text.length; i++) {
    if (hash[text[i]] === undefined) {
      hash[text[i]] = 1;
    } else {
      hash[text[i]] = hash[text[i]] + 1;
    }
  }

  let arr = [];
  for (let key in hash) {
    if (key === "b" || key === "a" || key === "n") {
      arr.push(hash[key]);
    } else if (key === "l" || key === "o") {
      arr.push(Math.floor(hash[key] / 2));
    }
  }
  let min = arr[0];
  arr.forEach(function(item) {
    if (item < min) {
      min = item;
    }
  });
  return min;
  //   arr.sort((a, b) => a - b);
  //   return arr[0];
};
console.log(maxNumberOfBalloons("loonbalxballpooooon"));
console.log(maxNumberOfBalloons("leetcode"));
