const { Queue } = require("./Queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    return current;
  }

  BFS() {
    let queue = new Queue();
    let data = [];
    queue.enqueue(this.root);
    let head = queue.peek(); // returns first element's value in Queue
    while (queue.size !== 0) {
      head = queue.dequeue();
      data.push(head.value);
      if (head.left) queue.enqueue(head.left);
      if (head.right) queue.enqueue(head.right);
    }
    return data;
  }
}

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(25);

// console.log(bst);
console.log(bst.BFS());
