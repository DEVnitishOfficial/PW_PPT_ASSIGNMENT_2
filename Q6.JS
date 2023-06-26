
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

// TIME COMPLEXITY → O(log n)  here n is the length of nums array
// SPACE COMPLEXITY → O(1)
function findTarget(nums, target){
  let initialPosition = 0;
  let lastPosition = nums.length -1;

  while(lastPosition >= initialPosition){
    let midValue = Math.floor((initialPosition + lastPosition)/2)

    if(nums[midValue] < target){
         initialPosition = midValue + 1;
    } else if (nums[midValue] > target){
      lastPosition = midValue - 1
    }else{
      return midValue;
    }
  }
  return -1;
}
let nums = [-1,0,3,5,9,12];
let target = 9;
let results = findTarget(nums, target)
console.log('The index of target element id : ',results);
