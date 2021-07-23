class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }

  peek() {
    return this.first.val;
  }

  search(value) {
    let current = this.first;
    while (current) {
      if (current.val === value) return true;
      current = current.next;
    }
    return false;
  }
}

let stack = new Stack();

stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.peek());

console.log(stack.search(5));
