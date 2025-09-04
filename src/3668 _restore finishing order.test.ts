import { describe, it, expect } from 'vitest';

function recoverOrder(order: number[], friends: number[]): number[] {
    // use a set to store the friends
    // iterate thru the order array to find if the element is in the friend set

    const friendSet = new Set(friends);
    const res: number[] = [];
    for(let i = 0; i < order.length; i++) {
      if (friendSet.has(order[i]) ) {
        res.push(order[i])
      }
    }
    return res
};

describe('recoverOrder', () => {
  it('should return friends in order', () => {
    expect(recoverOrder([1,2,3,4], [2,4])).toEqual([2,4]);
  });

  it('should return empty array', () =>{
    expect(recoverOrder([1,2,3,4], [5])).toEqual([])
  });


  it('should return empty array', () =>{
    expect(recoverOrder([1,2,3,4], [])).toEqual([])
  });
  it('should return empty array', () =>{
    expect(recoverOrder([1,2,3,4,5], [1,2,3,4])).toEqual([1,2,3,4])
  })
});