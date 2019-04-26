## Goat Latinizer Algorithm

A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

- If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
 
- If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
 
- Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.

Return the final sentence representing the conversion from S to Goat Latin.

### Test Cases

"I speak Goat Latin" -> "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

"The quick brown fox jumped over the lazy dog" -> "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

#### Algorithm Found on LeetCode

(Here) [https://leetcode.com/problems/goat-latin/]