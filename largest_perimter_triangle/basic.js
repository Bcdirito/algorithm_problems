function largestPerimeter(A) {
    let sortArr = A.sort(function(a, b){return a-b})
    let finalAmt = 0
    let sum;
    
    for (let i = 0; i < sortArr.length - 2; i++){
        if (sortArr[i] + sortArr[i+1] > sortArr[i + 2]){
            sum = sortArr[i] + sortArr[i+1] + sortArr[i + 2]
        }
        
        if (sum > finalAmt){
            finalAmt = sum
        }
    } 
    
    return finalAmt
};