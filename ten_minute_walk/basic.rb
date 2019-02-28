def isValidWalk(walk)
    if walk.length === 10
      total = 0
      walkHash = {
        "n" => 1,
        "s" => -1,
        "e" => 2,
        "w" => -2
      }
      walk.each {|i| total += walkHash[i]}
      return total == 0
    else 
      return false
    end
  end