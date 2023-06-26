// Question 3
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]   // subsequence  [1, 2, 2, 2, 3], [1, 2, 2, 2, 3, 3], [1, 2, 2, 2, 5, 3],[1, 2, 2, 2, 5, 3]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// A harmonious array is defined as an array where the difference between its maximum value and its minimum value is exactly 1.
// "harmonious" suggests that the elements in the subsequence have a specific property or relationship that is considered harmonious or desirable


// TIME COMPLEXITY → O(n) we have two loops both are running n times (1.for loop on nums for element 2.for loop on map for key value)
// SPACE COMPLEXITY → O(n)  in worst case if all key value pairs are unique then map will store all that. 

function findLongHarmSubArr (nums){

  let map = new Map();
  let subMaxLen = 0;

  for(let num of nums){
    if(map.has(num)){
      map.set(num, map.get(num)+1)
    }else{
      map.set(num, 1)
    }
    console.log(map);
  }
  
  for(let [num, count] of map){
    if(map.has(num + 1)){
      subMaxLen = Math.max(subMaxLen,count + map.get(num + 1))
    }
  }
  return subMaxLen;
}
 const result = findLongHarmSubArr([1,3,2,2,5,2,3,7])
//  console.log('The length of longest harmonious subsequence array is : ' , result);

// TIME COMPLEXITY → O(n) we have two loops both are running n times (1.for loop on nums for element 2.for loop on map for key value)
// SPACE COMPLEXITY → O(n)  in worst case if all key value pairs are unique then map will store all that.
function findLongHarmSubArr(nums) {
  let map = {};
  let subMaxLen = 0;

  for (let num of nums) {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
    // console.log(map);
  }

  for (let num in map) {
    num = parseInt(num); // Convert the key back to a number
    if (map[num + 1]) {
      subMaxLen = Math.max(subMaxLen, map[num] + map[num + 1]);
    }
  }
  
  return subMaxLen;
}

const results = findLongHarmSubArr([1, 3, 2, 2, 5, 2, 3, 7]);
console.log('The length of the longest harmonious subsequence array is:', results);
