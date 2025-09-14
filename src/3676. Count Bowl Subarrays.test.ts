import { describe, it, expect } from "vitest";

// 3676. Count Bowl Subarrays
// Medium
// premium lock iconCompanies
// Hint

// You are given an integer array nums with distinct elements.

// A

// nums[l...r] of nums is called a bowl if:

//     The subarray has length at least 3. That is, r - l + 1 >= 3.
//     The minimum of its two ends is strictly greater than the maximum of all elements in between. That is, min(nums[l], nums[r]) > max(nums[l + 1], ..., nums[r - 1]).

// Return the number of bowl subarrays in nums.

 

// Example 1:

// Input: nums = [2,5,3,1,4]

// Output: 2

// Explanation:

// The bowl subarrays are [3, 1, 4] and [5, 3, 1, 4].

//     [3, 1, 4] is a bowl because min(3, 4) = 3 > max(1) = 1.
//     [5, 3, 1, 4] is a bowl because min(5, 4) = 4 > max(3, 1) = 3.

// Example 2:

// Input: nums = [5,1,2,3,4]

// Output: 3

// Explanation:

// The bowl subarrays are [5, 1, 2], [5, 1, 2, 3] and [5, 1, 2, 3, 4].

// Example 3:

// Input: nums = [1000000000,999999999,999999998]

// Output: 0

// Explanation:

// No subarray is a bowl.

 

// Constraints:

//     3 <= nums.length <= 105
//     1 <= nums[i] <= 109
//     nums consists of distinct elements.


// runtime too long
// function bowlSubarrays(nums: number[]): number {
//     let numOfBowls = 0;
//     // two pointers
//     for (let r = 0; r < nums.length; r++) {
//         let maxInner = Number.NEGATIVE_INFINITY;
//         for (let l = r; l >= 0; l--) {
//             // size less than 3 move r++
//             if ((r - l + 1) < 3) {
//                 continue;
//             }
//             // if ()
//             maxInner = Math.max(nums[l + 1], maxInner);
//             if (maxInner >= nums[r]) {
//                 break;
//             }
//             if (maxInner < nums[l]) {
//                 // console.log(nums.slice(l, r+ 1))
//                 numOfBowls++;
//             }
//         }
//     }
//     return numOfBowls
// };

function bowlSubarrays(nums: number[]): number {
    let numOfBowls = 0;
    const pre: number[] = [Number.NEGATIVE_INFINITY];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i - 1], max)
        pre.push(max);
    }
    const suf = Array(nums.length).map(() => -1);
    suf[nums.length - 1] = nums[Number.NEGATIVE_INFINITY]
    max = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0 ; i--) {
        max = Math.max(nums[i + 1], max);
        suf.push(max)
    }
    for (let i = 0; i < nums.length; i++) {
        if (pre[i] > nums[i] && suf[i] > nums[i]) {
            numOfBowls++;
        }
    }
    return numOfBowls
};

describe('bowlSubarrays', () => {
  it('should return friends in order', () => {
    expect(bowlSubarrays([5,1,2,3,4])).toEqual(3);
  });
  it('should return friends in order', () => {
    expect(bowlSubarrays([2,5,3,1,4])).toEqual(2);
  });
  it('should return friends in order', () => {
    expect(bowlSubarrays([1000000000,999999999,999999998])).toEqual(0);
  });

});