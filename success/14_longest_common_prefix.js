// Link: https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // initialize empty str = ""
  // find length of strs = s
  // start for loop from 0 to strs[0][length]
      // currentLetter = strs[0][i]
      // for loop (1 to strs length)
          // if currentLetter != strs[j][i]
              // break
          // else
              // newStr+= currentLetter
  // return newStr

  let newStr = "";
  const arrLength = strs.length;
  let flag = false;

  for(let i = 0; i < strs[0].length; i++) {
      let currentLetter = strs[0][i];
      for(let j = 1; j < strs.length; j++) {
          if(strs[j][i] !== currentLetter) flag = true;
      }
      if (flag) break;
      else newStr += currentLetter;
  }

  return newStr;
};