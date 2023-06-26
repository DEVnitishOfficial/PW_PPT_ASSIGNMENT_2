// Question 2
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3

// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.



// OPTIMIZED
// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(m) due to containig unique candy if all the candytype is unique it will run to m times
function  uniqueMaxCandies(candytype){
    let uniqueCandy = {}
    let countUniqueCandy = 0;

    for(let i=0; i<candytype.length; i++){
        if(!uniqueCandy[candytype[i]]){
            uniqueCandy[candytype[i]] = true;
            countUniqueCandy++;
        }
    }
    const maxCandy = countUniqueCandy < candytype.length / 2 ? countUniqueCandy : candytype.length / 2;
    return maxCandy;
}
   
const results = uniqueMaxCandies([1,1,2,2,3,3])
console.log('The max candy that alice can eat is : ',results);


// OPTIMIZED SPACE COMPLEXITY BUT INCREASE TIME COMPLEXITY  
// TIME COMPLEXITY O(n^2)
// SPACE COMPLEXITY O(1)
function uniqueMaxCandies(candyType) {
    let countUniqueCandy = 0;
  
    for (let i = 0; i < candyType.length; i++) {
      if (candyType.indexOf(candyType[i]) === i) {
        countUniqueCandy++;
      }
    }
  
    const maxCandy = countUniqueCandy < candyType.length / 2 ? countUniqueCandy : candyType.length / 2;
    return maxCandy;
  }
  
  const result = uniqueMaxCandies([1,1,2,2,3,3]);
  console.log('The max candy that Alice can eat is:', result);
  
  
  
