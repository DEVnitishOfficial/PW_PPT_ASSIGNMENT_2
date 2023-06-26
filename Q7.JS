// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

//TIME COMPLEXITY → O(n) here i using only one loop for iterating on nums array
//SPACE COMPLEXITY → O(1)
function checkingMonotonic(nums){
    let increasing = true;
    let decreasing = true;

    for(let i=1; i<nums.length; i++){
        if(nums[i] >= nums[i - 1]){
            decreasing = false;
        }else if(nums[i] <= nums[i-1]){
            increasing = false;
        }
    }
    return increasing || decreasing; //if both become the false then it will return the false but if either is true it will return true i.e it is monotonic
}
const result = checkingMonotonic([1,2,2,3])
console.log(result);

  