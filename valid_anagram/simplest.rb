# Runtime 128ms, Memory Usage 18.6 MB

def is_anagram(s, t)
    # split both strings into arrays
    # sort both arrays
    # join arrays to strings
    # compare strings and return boolean
    s.split("").sort.join == t.split("").sort.join
end