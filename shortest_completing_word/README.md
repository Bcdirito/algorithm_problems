## Shortest Completing Word

Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.



### Test Cases

licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"] -> "steps"

licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"] -> "pest



#### Algorithm Found on LeetCode

[https://leetcode.com/problems/shortest-completing-word/]