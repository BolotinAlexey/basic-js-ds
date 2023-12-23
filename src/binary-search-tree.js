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
    if (typeof v !== "number") return;
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
    if (typeof v !== "number") return false;
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

  remove(v, node = this.rootNode, parent) {
    if (typeof v !== "number") return;
    if (!this.rootNode || !node) return;
    if (node.data > v) this.remove(v, node.left, node);
    if (node.data < v) this.remove(v, node.right, node);

    if (node.data !== v) return;
    if (!node.left) {
      if (!parent) this.rootNode = node.right;
      else {
        if (parent.left === node) parent.left = node.right;
        else parent.right = node.right;
      }
      return;
    }
    if (!node.right) {
      if (!parent) this.rootNode = node.left;
      else {
        if (parent.left === node) parent.left = node.left;
        else parent.right = node.left;
      }
      return;
    }
    let minNode = node.right;
    let prevNode = node.right;
    while (minNode.left) {
      prevNode = minNode;
      minNode = minNode.left;
    }
    prevNode.left = null;
    if (node === this.rootNode) this.rootNode = minNode;
    // const rmNode = node;
    minNode.left = node.left;
    node = minNode;
    if (node.right) {
      this.max(node, false).right = prevNode;
    }
  }

  // min max
  min(node = this.rootNode) {
    if (node.left) return this.min(node.left);
    return node.data;
  }

  max(node = this.rootNode, isValue = true) {
    if (node.right) return this.max(node.right, isValue);
    return isValue ? node.data : node;
  }
}

module.exports = {
  BinarySearchTree,
};
