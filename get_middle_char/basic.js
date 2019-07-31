function getMiddle(s)
{
  if (s.length % 2 === 0){
    let midIndexTwo = s.length / 2
    let midIndexOne = midIndexTwo - 1
    
    return `${s[midIndexOne]}${s[midIndexTwo]}`
  } else {
    let midIndex = (s.length - 1) / 2
    return s[midIndex]
  }
}