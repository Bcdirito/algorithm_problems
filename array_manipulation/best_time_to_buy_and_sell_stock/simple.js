// Runtime 60 ms, Memory Usage 35.8 MB

function maxProfit(prices) {
    // set the first element as the stored share
    // we will use this to check values of future shares
    let share = prices[0]

    // set the profit equal to 0
    let profit = 0

    // iterate through the remaining elements in the prices array
    // start at index 1
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < share){
            // if the current price is less than the store share, store that price
            share = prices[i]
        }
        
        if (prices[i] - share > profit){
            // if the current price minus the stored share is a bigger difference than the current profit, store that difference as the profit
            profit = prices[i] - share
        }
    }

    // return the profit
    return profit
}