import { describe, it, expect } from "vitest";

// 3591. Check if Any Element Has Prime Frequency
// Easy
// Topics
// premium lock iconCompanies
// Hint

// You are given an integer array nums.

// Return true if the frequency of any element of the array is prime, otherwise, return false.

// The frequency of an element x is the number of times it occurs in the array.

// A prime number is a natural number greater than 1 with only two factors, 1 and itself.

// Example 1:

// Input: nums = [1,2,3,4,5,4]

// Output: true

// Explanation:

// 4 has a frequency of two, which is a prime number.

// Example 2:

// Input: nums = [1,2,3,4,5]

// Output: false

// Explanation:

// All elements have a frequency of one.

// Example 3:

// Input: nums = [2,2,2,4,4]

// Output: true

// Explanation:

// Both 2 and 4 have a prime frequency.

// Constraints:

//     1 <= nums.length <= 100
//     0 <= nums[i] <= 100

// function findAllPrime(upto: number): number[] {
//   let res = [];
//   for (let num = 2; num <= upto; num++) {
//     const uptoFactor = Math.floor(num / 2);
//     let isPrime = true;
//     for (let factor = 2; factor <= uptoFactor; factor++) {
//       if (num % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       res.push(num);
//     }
//   }
//   return res;
// }

function checkPrimeFrequency(nums: number[]): boolean {
  // create frequency table
  let freqMap = new Map();
  for (let numsIdx = 0; numsIdx < nums.length; numsIdx++) {
    if (!freqMap.has(nums[numsIdx])) {
      freqMap.set(nums[numsIdx], 1);
    } else {
      const freq = freqMap.get(nums[numsIdx]);
      freqMap.set(nums[numsIdx], freq + 1);
    }
  }
  // find all prime numbers up to 100
  const primeSet = new Set([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]);

  // check if any frequency is prime
  for (let [val, freq] of freqMap.entries()) {
    if (primeSet.has(freq)) {
      return true;
    }
  }
  return false;
}

describe('checkPrimeFrequency', () => {
  it('should pass ', () => {
    
// Input: nums = [1,2,3,4,5,4]

// Output: true

    expect(checkPrimeFrequency([1,2,3,4,5,4])).toEqual(true);
  });

    it('should pass ', () => {
// Example 2:

// Input: nums = [1,2,3,4,5]

// Output: false

    expect(checkPrimeFrequency([1,2,3,4,5])).toEqual(false);
  });


    it('should pass ', () => {
// Example 2:
// Input: nums = [2,2,2,4,4]

// Output: true

    expect(checkPrimeFrequency([2,2,2,4,4])).toEqual(true);
  });

});