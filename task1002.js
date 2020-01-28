var commonChars = function(A) {
  var word = A[0];
  for (let i = 1; i < A.length; i++) {
    let curWord = A[i];
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (curWord.includes(char)) {
        curWord = curWord.replace(char, "");
      } else {
        word = word.replace(char, "");
        j--;
      }
    }
  }
  return word.split("");
};
// console.log(commonChars(["bella", "label", "roller"]));
// Output: ["e", "l", "l"];
console.log(
  commonChars([
    "daaccccd",
    "adacbdda",
    "abddbaba",
    "bacbcbcb",
    "bdaaaddc",
    "cdadacba",
    "bacbdcda",
    "bacdaacd"
  ])
);
// Output: ["a"]
