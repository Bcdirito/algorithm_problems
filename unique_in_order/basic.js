function uniqueInOrder(iterable){
  let charArr = []
  
  for (let i = 0; i < iterable.length; i++){
    if (iterable[i] !== iterable[i + 1]) charArr.push(iterable[i])
  }
  
  return charArr
}