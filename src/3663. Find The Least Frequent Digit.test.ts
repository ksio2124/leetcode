import { describe, it, expect } from 'vitest';

// Easy
// premium lock iconCompanies
// Hint

// Given an integer n, find the digit that occurs least frequently in its decimal representation. If multiple digits have the same frequency, choose the smallest digit.

// Return the chosen digit as an integer.
// The frequency of a digit x is the number of times it appears in the decimal representation of n.

 

// Example 1:

// Input: n = 1553322

// Output: 1

// Explanation:

// The least frequent digit in n is 1, which appears only once. All other digits appear twice.

// Example 2:

// Input: n = 723344511

// Output: 2

// Explanation:

// The least frequent digits in n are 7, 2, and 5; each appears only once.

 

// Constraints:

//     1 <= n <= 231​​​​​​​ - 1

function getLeastFrequentDigit(n: number): number {
    // put all digits into a bucket
    const digitFrequency = Array(10).fill(0);

    // got thru each digit
    let num = n;
    while (num > 0) {
      let digit = num % 10;
      digitFrequency[digit]++;
      num = Math.floor(num / 10);
    }
    // filter zeros
    // find the digit least frequent and smallest
    let minFrequency = Number.MAX_SAFE_INTEGER;
    let minDigit = -1;
    for (let digit = 9; digit >= 0; digit--) {
      const freq = digitFrequency[digit];
      if (freq === 0) {
        continue;
      }
      if (freq <= minFrequency) {
        minDigit = digit;
        minFrequency = freq;
      }
    }

    return minDigit;

};


describe('least Frequent Digit', () => {
  it('should return least frequent digit', () => {
    expect(getLeastFrequentDigit(112223333)).toEqual(1);
  });

  it('should return least frequent digit', () => {
    expect(getLeastFrequentDigit(1123333)).toEqual(2);
  });

});