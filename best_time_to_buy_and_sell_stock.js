/**
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // failed soln....did not work for very large quantity

  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
      for(let j = i + 1; j < prices.length; j++) {
          if ((prices[j] - prices[i]) > maxProfit) {
              maxProfit = (prices[j] - prices[i])
          }
      }
  }

  return maxProfit;

  // working soln - stolen from here (https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2761383/c-java-python3-javascript-solution-o-n/)

  let max = 0;
  let min = prices[0];

  for(let i=1;i<prices.length;i++){
    if(prices[i] < min){
        min = prices[i];
    }
    
    else if((prices[i] - min) > max )
    {
        max = prices[i] - min;
    }
}
return max;
};