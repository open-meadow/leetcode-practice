/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // initialize newArr = []
  // for i across nums
  // for j across nums
  // if nums[i] + nums[j] = target
  // newArr = [i,j]
  // return newArr

  const newArr = []

  for (let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              newArr.push(i,j);
          }
      }
  }

  return newArr;
};