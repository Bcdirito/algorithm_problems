function isValidWalk(walk) {
    if (walk.length === 10){
      let total = 0
      let walkObj = {
        "n": 1,
        "s": -1,
        "e": 2,
        "w": -2
      }
      for (let i = 0; i < walk.length; i++){
        total += walkObj[walk[i]]
      }
      return total === 0
    } else {
      return false
    }
}