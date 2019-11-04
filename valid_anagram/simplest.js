// Runtime 108ms, Memory Usage 38.3 MB

function isAnagram(s, t) {
    // split both strings into arrays
    // sort both arrays
    // join both arrays
    // compare strings and return boolean
    return s.split("").sort().join("") === t.split("").sort().join("")
};