function openOrSenior(data){
    // declare an empty array to contain the "Senior" and "Open" values
    let statusArr = []

    // iterate through the data
    for (let i = 0; i < data.length; i++){
        // if the age is above or equal to 55 and the handicap is above 7,
        // push "Senior" into the status array
        if (data[i][0] >= 55 && data[i][1] > 7) statusArr.push("Senior")
        // else, push "Open" into the status array
        else statusArr.push("Open")
    }
    
    // return the status array
    return statusArr
}