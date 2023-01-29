/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
  let count = 0;
  //first turn string into array and sort and rejoin into string
  //then we match the repeated characters
  const textShuffled = text
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g);

  if (textShuffled != null) {
    textShuffled.forEach((el) => {
      count++;
    });
  }
  return count;
}

/* Explanation
/
(.)\1+
/
gm
1st Capturing Group (.)
. matches any character (except for line terminators)
\1 matches the same text as most recently matched by the 1st capturing group
+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
Global pattern flags 
g modifier: global. All matches (don't return after first match)
m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
*/

function duplicateCount(text) {
  return (text,
  toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g) || []).length;
}
