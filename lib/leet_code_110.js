// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function maxHeight(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
}

function minHeight(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.min(minHeight(node.left), minHeight(node.right));
}


function height(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(height(node.left), height(node.right));
}

function isBalanced(root) {
  if (root === null) {
    return true;
  }
  const lt = height(root.left);
  const rt = height(root.right);

  let diff = Math.abs(lt - rt);

  if (diff <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  } else {
    return false;
  }
};

// Runtime: 76 ms, faster than 28.88 % of JavaScript online submissions
// for Balanced Binary Tree.
// Memory Usage: 37.3 MB, less than 100.00 % of JavaScript online submissions
// for Balanced Binary Tree.