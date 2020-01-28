var isAnagram = function(s, t) {
  let result = true;
  if (s.length != t.length) {
    result = false;
  }
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = 1;
    } else if (hash[s[i]]) {
      hash[s[i]] += 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (hash[t[j]] != undefined) {
      hash[t[j]] -= 1;
    }
  }

  for (let key in hash) {
    console.log(hash[key]);
    if (hash[key] !== 0) {
      result = false;
    }
  }
  return result;
};

// console.log(isAnagram("rat", "car"));
console.log(isAnagram("", ""));
console.log(isAnagram("a", "ab"));
