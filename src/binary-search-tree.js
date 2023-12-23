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

  has(v, isHas = true) {
    if (!this.rootNode) return isHas ? false : null;
    let node = this.rootNode;
    while (true) {
      if (node.data === v) return isHas ? true : node;
      if (node.data > v) {
        if (!node.left) return isHas ? false : null;
        node = node.left;
        continue;
      }
      if (!node.right) return isHas ? false : null;
      node = node.right;
      continue;
    }
  }

  find(v) {
    return this.has(v, false);
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
