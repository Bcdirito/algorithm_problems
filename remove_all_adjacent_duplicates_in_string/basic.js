const removeDuplicates = (S) => {
    let copyArr = S.split("")
    
    for (let i = 0; i < copyArr.length; i++){
        if (copyArr[i] === copyArr[i+1]) {
            copyArr.splice(i, 2)
            i = -1
        }
    }
    
    return copyArr.join("")
};