const findKthLargest = (nums, k) => {
    
    const findInsert = (arr, val) => {
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i+1] >= val){
                arr.splice(i+1, 0, val)
                return ""
            }
        }
        
        arr.push(val)
    }
    
    const sortArr = (arr) => {
        let sort = [arr[0]]
        
        for (let i = 1; i < arr.length; i++){
            if (arr[i] <= sort[0]) sort.unshift(arr[i])
            else findInsert(sort, arr[i])
            
        }
        
        return sort
    }
    
    return sortArr(nums)[nums.length - k]
};