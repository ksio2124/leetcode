import { describe, it, expect } from 'vitest';

// 3633. Earliest Finish Time for Land and Water Rides I
// Easy
// Topics
// premium lock iconCompanies
// Hint

// You are given two categories of theme park attractions: land rides and water rides.

//     Land rides
//         landStartTime[i] – the earliest time the ith land ride can be boarded.
//         landDuration[i] – how long the ith land ride lasts.
//     Water rides
//         waterStartTime[j] – the earliest time the jth water ride can be boarded.
//         waterDuration[j] – how long the jth water ride lasts.

// A tourist must experience exactly one ride from each category, in either order.

//     A ride may be started at its opening time or any later moment.
//     If a ride is started at time t, it finishes at time t + duration.
//     Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.

// Return the earliest possible time at which the tourist can finish both rides.

 

// Example 1:

// Input: landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]

// Output: 9

// Explanation:​​​​​​​

//     Plan A (land ride 0 → water ride 0):
//         Start land ride 0 at time landStartTime[0] = 2. Finish at 2 + landDuration[0] = 6.
//         Water ride 0 opens at time waterStartTime[0] = 6. Start immediately at 6, finish at 6 + waterDuration[0] = 9.
//     Plan B (water ride 0 → land ride 1):
//         Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
//         Land ride 1 opens at landStartTime[1] = 8. Start at time 9, finish at 9 + landDuration[1] = 10.
//     Plan C (land ride 1 → water ride 0):
//         Start land ride 1 at time landStartTime[1] = 8. Finish at 8 + landDuration[1] = 9.
//         Water ride 0 opened at waterStartTime[0] = 6. Start at time 9, finish at 9 + waterDuration[0] = 12.
//     Plan D (water ride 0 → land ride 0):
//         Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
//         Land ride 0 opened at landStartTime[0] = 2. Start at time 9, finish at 9 + landDuration[0] = 13.

// Plan A gives the earliest finish time of 9.

// Example 2:

// Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]

// Output: 14

// Explanation:​​​​​​​

//     Plan A (water ride 0 → land ride 0):
//         Start water ride 0 at time waterStartTime[0] = 1. Finish at 1 + waterDuration[0] = 11.
//         Land ride 0 opened at landStartTime[0] = 5. Start immediately at 11 and finish at 11 + landDuration[0] = 14.
//     Plan B (land ride 0 → water ride 0):
//         Start land ride 0 at time landStartTime[0] = 5. Finish at 5 + landDuration[0] = 8.
//         Water ride 0 opened at waterStartTime[0] = 1. Start immediately at 8 and finish at 8 + waterDuration[0] = 18.

// Plan A provides the earliest finish time of 14.​​​​​​​

 

// Constraints:

//     1 <= n, m <= 100
//     landStartTime.length == landDuration.length == n
//     waterStartTime.length == waterDuration.length == m
//     1 <= landStartTime[i], landDuration[i], waterStartTime[j], waterDuration[j] <= 1000

function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    // find the ending time for each event

    const landTime = landStartTime.map((startTime, idx) => [startTime, landDuration[idx] + startTime, landDuration[idx]]);
    const waterTime = waterStartTime.map((startTime, idx) => [startTime, waterDuration[idx] + startTime, waterDuration[idx]]);

    // pick earliest ending water then earliest ending land that does not interfere with the first water
    
    // sort by endTime
    landTime.sort((a,b) => a[1] - b[1]);
    waterTime.sort((a,b) => a[1] - b[1]);

    // pick water
    let finalEndTime = Number.MAX_SAFE_INTEGER;
    // pick land that does not interfere with the water end time
    for (let i = 0; i < landStartTime.length;i++) {
      const newFinalTime = landTime[i][0] >= (waterTime[0][1]) ? landTime[i][1] : waterTime[0][1] + landTime[i][2];
      finalEndTime = Math.min(newFinalTime, finalEndTime)
      if (landTime[i][0] >= (waterTime[0][1])) {
        break;
      }
    }

    for (let i = 0; i < waterStartTime.length; i++) {
      const newFinalTime = waterTime[i][0] >= landTime[0][1] ? waterTime[i][1] : landTime[0][1] + waterTime[i][2]
      finalEndTime = Math.min(newFinalTime, finalEndTime);
      if (waterTime[i][0] >= landTime[0][1] ) {
        break;
      }
    }
    return finalEndTime;
};

describe('earliestFinishTime', () => {
  it('should pass ', () => {
    // Input: landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]

// Output: 9
    expect(earliestFinishTime([2,8], [4,1], [6], [3])).toEqual(9);
  });

  it('should pass ', () => {
// Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]

// Output: 14
    expect(earliestFinishTime([5], [3], [1], [10])).toEqual(14);
  });

  it('should pass ', () => {
// Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]

// Output: 14
    expect(earliestFinishTime([99], [59], [99, 54], [85, 20])).toEqual(158);
  });

});