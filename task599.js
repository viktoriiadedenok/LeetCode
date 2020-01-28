var findRestaurant = function(list1, list2) {
  let hash = {};
  for (let i = 0; i < list2.length; i++) {
    if (list1.includes(list2[i])) {
      hash[list2[i]] = true;
    }
  }
  for (let key in hash) {
    hash[key] = list1.indexOf(key) + list2.indexOf(key);
  }
  let result = [];
  let count = +Infinity;
  for (let key in hash) {
    if (hash[key] < count) {
      count = hash[key];
    }
  }
  for (let key in hash) {
    if (hash[key] == count) {
      result.push(key);
    }
  }
  return result;
};
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun"
    ]
  )
);
// console.log(
//   findRestaurant(

//   )
// );
//["KFC","Burger King","Tapioca Express","Shogun"]
