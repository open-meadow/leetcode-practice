// Link: https://leetcode.com/problems/koko-eating-bananas/description/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  // sort array
  // use binary search to find correct number from 1 to piles[length - 1]
  // Used this video to understand the logic: https://www.youtube.com/watch?v=6tUs8Ii3_Qs

  piles.sort((a,b) => {
      return (a - b);
  });

  let left = 1;
  let right = piles[piles.length - 1];

  const canEat = (speed) => {
      let time = 0;
      piles.map((item) => {
          time += Math.floor((item + speed - 1)/speed);
      })

      return time <= h;
  };

  while(left < right) {
      const mid = Math.floor((left + right) / 2);

      if(canEat(mid)) right = mid;
      else left = mid + 1;
  }

  return left;

};