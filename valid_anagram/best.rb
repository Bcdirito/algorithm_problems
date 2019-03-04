def is_anagram(s, t)
    s.split("").sort.join == t.split("").sort.join
end