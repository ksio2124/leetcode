// 3658. GCD of Odd and Even Sums
// Easy
// premium lock iconCompanies
// Hint

// You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

//     sumOdd: the sum of the first n odd numbers.

//     sumEven: the sum of the first n even numbers.

// Return the GCD of sumOdd and sumEven.

 

// Example 1:

// Input: n = 4

// Output: 4

// Explanation:

//     Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
//     Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20

// Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.

// Example 2:

// Input: n = 5

// Output: 5

// Explanation:

//     Sum of the first 5 odd numbers sumOdd = 1 + 3 + 5 + 7 + 9 = 25
//     Sum of the first 5 even numbers sumEven = 2 + 4 + 6 + 8 + 10 = 30

// Hence, GCD(sumOdd, sumEven) = GCD(25, 30) = 5.

 

// Constraints:

//     1 <= n <= 10​​​​​​​00

function gcdOfOddEvenSums(n: number): number {

    //brute force no optimization

    // sum all odds up to n
    let oddSum = 0;
    let evensum = 0;
    // sum all evens up to n
    const lastNum = n * 2;
    for (let i = 1; i <= lastNum; i++) {
      if (i % 2 === 0) {
        evensum += i;
      } else {
        oddSum += i
      }
    }

    //find greatest common divisor
    //check every  number to see if we can find the GCD up to min of oddSum and evenSum

    // GCD cannot be greater than Math.floor()
    const upto =  n




};