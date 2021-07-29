class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }

  search(value) {
    let current = this.first;
    while (current) {
      if (current.val === value) return true;
      current = current.next;
    }
    return false;
  }

  peek() {
    return this.first.val;
  }
}

module.exports = { Queue };
