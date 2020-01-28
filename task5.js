// var checkPossibility = function(nums) {
//   let res = 0;
//   for(let i = 0; i<nums.length; i++){
//      console.log(i);
//      console.log(nums);
//    if (nums[i+1] < nums[i]){
//            res +=1;
//            nums.splice(i,1);
//            if (res >=1){
//              i-=1;
//               }
//             }
//          }
// // console.log(nums);
//  }
// checkPossibility([4,2,1]);//2
// checkPossibility([4,2,3]);//1
// checkPossibility([7,1,2,3,6,2,5]);//2
// checkPossibility([1,2,3,4,5])//

// var checkPossibility = function(nums){
//    let count = 0;
//    let res = 0;
//    let rusult = "";
//    for(let i = 0; i<nums.length; i++){
//       if(nums[i+1] < nums[i]){
//          res+=1; count+=1;
//       }
//       if((res>=1) & (nums[i+2]<nums[i+1])){
//             count+=1;
//          }
//    }
// if(count <= 1){
//    result = true;
// }
//    else{result = false
//    }
// return result;
// console.log(result);
// }
// checkPossibility([4,2,3]);//true
// checkPossibility([1,2,3,5]);//true
// checkPossibility([4,2,1]);//false
// checkPossibility([3,4,2,3]);//false1
