import { describe, it, expect } from "vitest";

// 3582. Generate Tag for Video Caption
// Easy
// Topics
// premium lock iconCompanies
// Hint

// You are given a string caption representing the caption for a video.

// The following actions must be performed in order to generate a valid tag for the video:

//     Combine all words in the string into a single camelCase string prefixed with '#'. A camelCase string is one where the first letter of all words except the first one is capitalized. All characters after the first character in each word must be lowercase.

//     Remove all characters that are not an English letter, except the first '#'.

//     Truncate the result to a maximum of 100 characters.

// Return the tag after performing the actions on caption.

// Example 1:

// Input: caption = "Leetcode daily streak achieved"

// Output: "#leetcodeDailyStreakAchieved"

// Explanation:

// The first letter for all words except "leetcode" should be capitalized.

// Example 2:

// Input: caption = "can I Go There"

// Output: "#canIGoThere"

// Explanation:

// The first letter for all words except "can" should be capitalized.

// Example 3:

// Input: caption = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

// Output: "#hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

// Explanation:

// Since the first word has length 101, we need to truncate the last two letters from the word.

// Constraints:

//     1 <= caption.length <= 150
//     caption consists only of English letters and ' '.

function generateTag(caption: string): string {
  // split words up
  // filter all char not alpha
  // convert word into camelCase
  const helperWord = (word: string) => {
    const newWord = word.split("").map((char) => char.toLowerCase());
    newWord[0] = newWord[0].toUpperCase();
    return newWord;
  };
  const captions = caption.split(" ").filter(word => word !== '').map(helperWord);
  // convert first letter of first word to lowercase

  if (captions[0]?.[0] ) {
    captions[0][0] = captions[0][0].toLowerCase();
  }
  // add '#'
  captions.unshift(["#"]);
  // join char into word and join word into string
  return captions.map((word) => word.join("")).join("").slice(0, 100)
}

describe("generateTag", () => {
  it("generate tag", () => {
    expect(generateTag("Leetcode daily streak achieved")).toEqual(
      "#leetcodeDailyStreakAchieved"
    );
  });
  it("generate tag", () => {
    expect(generateTag("can I Go There")).toEqual("#canIGoThere");
  });
  it("generate tag", () => {
    expect(
      generateTag(
        "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
      )
    ).toEqual(
      "#hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    );
  });
});
