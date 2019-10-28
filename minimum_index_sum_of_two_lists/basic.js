const findRestaurant = (list1, list2) => {
    let idx;
    let els = []
    
    const createHistory = (list) => {
        let obj = {}
        
        for (let i = 0; i < list.length; i++){
            obj[`${list[i]}`] = i
        }
        
        return obj
    }
    
    let historyOne = createHistory(list1)
    let historyTwo = createHistory(list2)
    
    for (const key in historyOne){
        if (historyTwo[key] !== undefined){
            let sum = historyOne[key] + historyTwo[key]
            if (sum <= idx || idx === undefined) {
                els.push(key)
                idx = sum
            }
        }
    }
    
    return els
};