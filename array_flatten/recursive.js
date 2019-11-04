let myArr = [
  [1, 2, 3],
  [4, 5],
  6,
  [7, 8, 9],
  [[10], 11],
  [[[12]]]
]

const arrFlatten = (arr) => {
  let flatArr = []

  for (let i = 0; i < arr.length; i++){
    if (arr[i].length){
      let flatIdx = arrFlatten(arr[i])
      flatArr.push(...flatIdx)
    } else {
      flatArr.push(arr[i])
    }
  }

  return flatArr
}

console.log(arrFlatten(myArr))