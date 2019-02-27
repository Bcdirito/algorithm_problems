function two_sum(ints, s){
    let history = {}
    for (let i = 0; i < ints.length; i++){
      if (history[ints[i]] !== undefined){
        return [history[ints[i]], ints[i]]
      } else {
        let difference = s - ints[i]
        history[difference] = ints[i]
      }
    }
    return "No Pair Sum"
}