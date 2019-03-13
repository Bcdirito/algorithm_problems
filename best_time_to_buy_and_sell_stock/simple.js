function maxProfit(prices) {
    let share = prices[0]
    let profit = 0
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < share){
            share = prices[i]
        }
        
        if (prices[i] - share > profit){
            profit = prices[i] - share
        }
    }
    return profit
}