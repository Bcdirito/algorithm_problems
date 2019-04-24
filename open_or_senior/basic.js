function openOrSenior(data){
    ageArr = []
    for (let i = 0; i < data.length; i++){
      if (data[i][0] >= 55 && data[i][1] > 7) ageArr.push("Senior")
      else ageArr.push("Open")
    }
    
    return ageArr
}