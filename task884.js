var uncommonFromSentences = function(A, B) {
  C = (A + " " + B).split(" ");
  let hash = {};
  for (let i = 0; i < C.length; i++) {
    if (hash[C[i]] === undefined) {
      hash[C[i]] = 1;
    } else {
      hash[C[i]] = hash[C[i]] + 1;
    }
  }
  let result = [];
  for (let key in hash) {
    if (hash[key] === 1) {
      result.push(key);
    }
  }
  return result;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// Output: ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana"));
