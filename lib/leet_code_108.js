// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  let hi = nums.length - 1;
  return arrayToBSTHelper(nums, 0, hi);
};

function arrayToBSTHelper(nums, lo, hi) {
  if (lo > hi) return null;
  let mid = lo + Math.floor((hi - lo) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = arrayToBSTHelper(nums, lo, mid - 1);
  root.right = arrayToBSTHelper(nums, mid + 1, hi);
  return root;
};


// Runtime: 72 ms, faster than 35.47 % of JavaScript online submissions
// for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 37.8 MB, less than 26.92 % of JavaScript online submissions
// for Convert Sorted Array to Binary Search Tree.