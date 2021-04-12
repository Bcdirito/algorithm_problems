const halvesAreAlike = (s) => {
    const first = s.split("").slice(0, s.length/2)
    const second = s.split("").slice(s.length/2)
    const vowels = {}
    
    "aeiouAEIOU".split("").forEach(char => vowels[char] = "")
    
    return first.filter(char => vowels[char] !== undefined).length === second.filter(char => vowels[char] !== undefined).length
};