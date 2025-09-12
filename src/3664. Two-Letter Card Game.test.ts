import { describe, it, expect } from "vitest";
import { PriorityQueue } from "@datastructures-js/priority-queue";
// 3664. Two-Letter Card Game
// Medium
// premium lock iconCompanies
// Hint

// You are given a deck of cards represented by a string array cards, and each card displays two lowercase letters.

// You are also given a letter x. You play a game with the following rules:

//     Start with 0 points.
//     On each turn, you must find two compatible cards from the deck that both contain the letter x in any position.
//     Remove the pair of cards and earn 1 point.
//     The game ends when you can no longer find a pair of compatible cards.

// Return the maximum number of points you can gain with optimal play.

// Two cards are compatible if the strings differ in exactly 1 position.

// Example 1:

// Input: cards = ["aa","ab","ba","ac"], x = "a"

// Output: 2

// Explanation:

//     On the first turn, select and remove cards "ab" and "ac", which are compatible because they differ at only index 1.
//     On the second turn, select and remove cards "aa" and "ba", which are compatible because they differ at only index 0.

// Because there are no more compatible pairs, the total score is 2.

// Example 2:

// Input: cards = ["aa","ab","ba"], x = "a"

// Output: 1

// Explanation:

//     On the first turn, select and remove cards "aa" and "ba".

// Because there are no more compatible pairs, the total score is 1.

// Example 3:

// Input: cards = ["aa","ab","ba","ac"], x = "b"

// Output: 0

// Explanation:

// The only cards that contain the character 'b' are "ab" and "ba". However, they differ in both indices, so they are not compatible. Thus, the output is 0.

// Constraints:

//     2 <= cards.length <= 105
//     cards[i].length == 2
//     Each cards[i] is composed of only lowercase English letters between 'a' and 'j'.
//     x is a lowercase English letter between 'a' and 'j'.

function matching(map: Map<string, number>): number {
  let total = 0;
  let max = 0;
  map.entries().forEach((elem) => {
    total += elem[1];
    max = Math.max(max, elem[1]);
  });
  return Math.min(Math.floor(total / 2), total - max)
}

function score(cards: string[], x: string): number {
  let xAt0 = new Map();
  let xAt1 = new Map();
  let xAtBoth = 0;
  let totalCards = 0;
  for (let cardIdx = 0; cardIdx < cards.length; cardIdx++) {
    let card = cards[cardIdx];
    if (card[0] === x && card[1] === x) {
      xAtBoth++;
    } else if (card[0] === x) {
      const key = card[1];
      let freq = xAt0.get(key) ?? 0;
      totalCards++;
      xAt0.set(key, freq + 1);
    } else if (card[1] === x) {
      const key = card[0];
      let freq = xAt1.get(key) ?? 0;
      xAt1.set(key, freq + 1);
      totalCards++;
    }
  }

  // math the greatest freq with the diff
  const points0 = matching(xAt0);
  const points1 = matching(xAt1);
  let maxScore = 0;
  for (
    let sameGroupUsed = 0;
    sameGroupUsed <= points0 + points1;
    sameGroupUsed++
  ) {
    const remainingCards = totalCards - 2 * sameGroupUsed;
    const crossGroupPairs = Math.min(xAtBoth, Math.max(0, remainingCards));
    maxScore = Math.max(maxScore, sameGroupUsed + crossGroupPairs);
  }
  return maxScore;
}

describe("score", () => {
  it("should pass", () => {
    expect(score(["aa", "ab", "ba", "ac"], "a")).toEqual(2);
  });
  it("should pass", () => {
    expect(score(["aa", "ab", "ba"], "a")).toEqual(1);
  });
  it("should pass", () => {
    expect(score(["aa", "ab", "ba", "ac"], "b")).toEqual(0);
  });
  it("should pass", () => {
    expect(score(["bb", "bb"], "b")).toEqual(0);
  });
  it("should pass", () => {
    expect(score(["ba", "ba"], "b")).toEqual(0);
  });
  it("should pass", () => {
    expect(score(["ba", "aa", "ba", "ca"], "a")).toEqual(2);
  });
  it("should pass", () => {
    expect(
      score(
        [
          "ab",
          "aa",
          "ab",
          "bc",
          "cc",
          "bc",
          "bb",
          "ac",
          "bc",
          "bc",
          "aa",
          "aa",
          "ba",
          "bc",
          "cb",
          "ba",
          "ac",
          "bb",
          "cb",
          "ac",
          "cb",
          "cb",
          "ba",
          "bc",
          "ca",
          "ba",
          "bb",
          "cc",
          "cc",
          "ca",
          "ab",
          "bb",
          "bc",
          "ba",
          "ac",
          "bc",
          "ac",
          "ac",
          "bc",
          "bb",
          "bc",
          "ac",
          "bc",
          "aa",
          "ba",
          "cc",
          "ac",
          "bb",
          "ba",
          "bb",
        ],
        "b"
      )
    ).toEqual(16);
  });
});
