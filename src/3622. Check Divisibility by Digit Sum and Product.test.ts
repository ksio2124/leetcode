import { describe, it, expect } from 'vitest';
// 3622. Check Divisibility by Digit Sum and Product
// Easy
// Topics
// premium lock iconCompanies
// Hint

// You are given a positive integer n. Determine whether n is divisible by the sum of the following two values:

//     The digit sum of n (the sum of its digits).

//     The digit product of n (the product of its digits).

// Return true if n is divisible by this sum; otherwise, return false.

 

// Example 1:

// Input: n = 99

// Output: true

// Explanation:

// Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.

// Example 2:

// Input: n = 23

// Output: false

// Explanation:

// Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.

 

// Constraints:

//     1 <= n <= 106

function checkDivisibility(n: number): boolean {
    // sum of digits
    let sum = 0;
    // product of digits
    let product = 1;

    let num = n;
    while (num > 0) {
      const digit = num % 10;
      sum += digit;
      product *= digit;
      num = Math.floor(num / 10);
    }

    const divisor = sum + product;
    return n % divisor === 0
};

describe('checkDivisibility', () => {
  it('should pass ', () => {
    expect(checkDivisibility(99)).toEqual(true);
  });

  it('should pass ', () => {
    // 5 + 6 = 11
    expect(checkDivisibility(23)).toEqual(false);
  });

  it('should pass ', () => {
    // 8 + 16 = 24
    expect(checkDivisibility(44)).toEqual(false);
  });

});