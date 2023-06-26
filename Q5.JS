// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6


// TIME COMPLEXITY → O(n log n)     due to sorting algorithem we can avoid it because in the given question array is sorted but i write this if any one put the non sorted array then still it will work
// SPACE COMPLEXITY → O(1) we are not using any extra space
// CODE WORK ONLY ON SORTED ARRAY

function findMaxProdcut(nums){
    nums.sort((a , b) => a-b);

    let n = nums.length;
    const maxProduct = nums[n-1]* nums[n-2]*nums[n-3];
    return maxProduct;
}
const result = findMaxProdcut([1,2,3])
console.log(result);   


