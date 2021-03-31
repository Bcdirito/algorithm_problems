const secondHighest = (s) => {
    let nums = s.split("").filter(s => !isNaN(s)).map(num => Number(num))
    let uniques = Array.from(new Set(nums))
    uniques.sort((a, b) => b - a)
    return uniques.length > 1 ? uniques[1] : -1
};