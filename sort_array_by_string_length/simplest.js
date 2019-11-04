function sortByLength (array) {
    // sort the original array by the length
    // return the mutated array
    return array.sort((a, b) => {return a.length - b.length})
};