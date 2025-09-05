import { describe, it, expect } from 'vitest';


// 3669. Balanced K-Factor Decomposition
// Medium
// premium lock iconCompanies
// Hint

// Given two integers n and k, split the number n into exactly k positive integers such that the product of these integers is equal to n.

// Return any one split in which the maximum difference between any two numbers is minimized. You may return the result in any order.

 

// Example 1:

// Input: n = 100, k = 2

// Output: [10,10]

// Explanation:

// The split [10, 10] yields 10 * 10 = 100 and a max-min difference of 0, which is minimal.

// Example 2:

// Input: n = 44, k = 3

// Output: [2,2,11]

// Explanation:

//     Split [1, 1, 44] yields a difference of 43
//     Split [1, 2, 22] yields a difference of 21
//     Split [1, 4, 11] yields a difference of 10
//     Split [2, 2, 11] yields a difference of 9

// Therefore, [2, 2, 11] is the optimal split with the smallest difference 9.

 

// Constraints:

//     4 <= n <= 105
//     2 <= k <= 5
//     k is strictly less than the total number of positive divisors of n.

function minDifference(n: number, k: number): number[] {
    // find all prime factors
    // multiple the prime factors from smallest to greatest in k buckets
    const primeFactors = []; // [2,2,5,5]
    let num = n; //25, 5
    const upperlimit = Math.floor(n /2);
    for (let i = 2; i <= upperlimit; i++) {
      while (num % i === 0) {
        primeFactors.push(i);
        num = Math.floor(num / i);
      }
      if (num === 1) {
        break;
      }
    }
    console.log(primeFactors)
    const res = Array(k).fill(1)
    for (let i = 0; i < primeFactors.length; i++) {
      const bucketIndex = i % res.length;
      res[bucketIndex] *= primeFactors[i]
    }

    return res;

};

describe('recoverOrder', () => {
  it('should return friends in order', () => {
    expect(minDifference(100,2)).toEqual([10,10]);
  });

    it('should return friends in order', () => {
    expect(minDifference(44,3)).toEqual([2,2,11]);
  });

    it('should return friends in order', () => {
    expect(minDifference(360,4)).toEqual([3,4,5,6]);
  });


});