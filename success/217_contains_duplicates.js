// my solution (inefficient)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // i loop
  // j loop
  // as soon as duplicate is found, return true

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return true;
          }
      }
  }

  return false;
};