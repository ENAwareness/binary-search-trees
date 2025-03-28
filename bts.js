class Tree {
  constructor(arr) {
    this.root = this.buildTree([...new Set(arr)].sort((a, b) => a - b));
  }

  buildTree(sortedArr) {
    if (sortedArr.length === 0) return null;

    const mid = Math.floor(sortedArr.length / 2);
    const root = new Node(sortedArr[mid]);

    root.left = this.buildTree(sortedArr.slice(0, mid));
    root.right = this.buildTree(sortedArr.slice(mid + 1));

    return root;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//test
const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
console.log(tree.root);
