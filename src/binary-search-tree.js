const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;
  root() {
    return this.rootNode ? this.rootNode : null;
  }

  add(v) {
    if (!this.rootNode) {
      this.rootNode = new Node(v);
      return;
    }
    let node = this.rootNode;
    while (true) {
      if (node.data > v) {
        if (!node.left) {
          node.left = new Node(v);
          return;
        } else {
          node = node.left;
          continue;
        }
      }
      if (node.data < v) {
        if (!node.right) {
          node.right = new Node(v);
          return;
        } else {
          node = node.right;
          continue;
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
