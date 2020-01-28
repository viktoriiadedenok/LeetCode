var shortestCompletingWord = function(licensePlate, words) {
  let arr = licensePlate.toLowerCase().split("");
  let str = "";
  arr.forEach(element => {
    if (isNaN(element)) {
      str += element;
    }
  });
  let arr3 = [];
  let str2 = "";
  for (let i = 0; i < words.length; i++) {
    let res = true;
    str2 = words[i];
    for (let j = 0; j < str.length; j++) {
      if (!str2.includes(str[j])) {
        res = false;
      }
      str2 = str2.replace(str[j], "");
    }
    if (res) {
      arr3.push(words[i]);
    }
  }
  let result = arr3[0];
  arr3.forEach(element => {
    if (element.length < result.length) {
      result = element;
    }
  });
  return result;
};
shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]);
// Output: "steps"
shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]);
// Output: "pest"
shortestCompletingWord("Ah71752", [
  "suggest",
  "letter",
  "of",
  "husband",
  "easy",
  "education",
  "drug",
  "prevent",
  "writer",
  "old"
]);
