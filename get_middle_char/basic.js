function getMiddle(s) {
    // determine whether or not the length of the string is even
    if (s.length % 2 === 0){
        // if so, you'll need to get two indices
        // it's easier to get the second index first, since it is just the length divided by two
        // then, get the first index by subtracting one from that index
        let midIndexTwo = s.length / 2
        let midIndexOne = midIndexTwo - 1

        // return an interpolated string with the two indices in them.
        return `${s[midIndexOne]}${s[midIndexTwo]}`
    } else {
        // get the middle index by dividing the length by two and rounding down
        let midIndex = Math.floor(s.length / 2)

        // return that index
        return s[midIndex]
    }
}