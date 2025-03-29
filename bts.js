class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (!arr.length) return null;

    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    return this.#buildTreeRec(sortedArr, 0, sortedArr.length - 1);
  }

  #buildTreeRec(arr, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.#buildTreeRec(arr, start, mid - 1);
    node.right = this.#buildTreeRec(arr, mid + 1, end);

    return node;
  }

  insert(val) {
    this.root = this.#insertRec(this.root, val);
  }

  #insertRec(node, val) {
    if (node === null) return new Node(val);

    if (val < node.data) {
      node.left = this.#insertRec(node.left, val);
    } else if (val > node.data) {
      node.right = this.#insertRec(node.right, val);
    }

    return node;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

//test
const tree = new Tree([1, 4, 5, 76, 8, 98, 98, 956, 6, 67]);
tree.insert(24);
tree.insert(34);
prettyPrint(tree.root);
