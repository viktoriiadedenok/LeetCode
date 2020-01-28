var countCharacters = function(words, chars) {
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    let res = true;
    let str = chars;
    for (let k = 0; k < words[i].length; k++) {
      if (str.includes(words[i][k]) === false) {
        res = false;
      } else {
        str = str.replace(words[i][k], "");
      }
    }
    if (res) {
      sum += words[i].length;
    }
  }
  return sum;
};
console.log(
  countCharacters(
    [
      "dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
      "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
      "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl",
      "boygirdlggnh",
      "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
      "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
      "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
      "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
      "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
      "oxgaskztzroxuntiwlfyufddl",
      "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
      "qnagrpfzlyrouolqquytwnwnsqnmuzphne",
      "eeilfdaookieawrrbvtnqfzcricvhpiv",
      "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
      "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
      "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
      "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
      "teyygdmmyadppuopvqdodaczob",
      "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
      "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"
    ],
    "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
  )
);
