//Recursion

//simple example of recursion
// let countDownFrom = (num) => {
//     if(num === 0) return;
//     console.log(num);
//     countDownFrom(num-1);
// }

// countDownFrom(10);

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

let removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums;

//practice using map
//      let mapped = nums.map((num) => {
//          if(num !== val) {
//              console.log(num);
//              return num;
//      }
        

// })
// return mapped.filter(Number);
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));