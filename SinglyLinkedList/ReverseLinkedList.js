class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  reverse() {
    // [100, 200, 300, 400]
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    while (node) {
      console.log("Prev ->", prev);
      console.log("Node ->", node);
      console.log("Next ->", next);
      console.log("================================");
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    // [400, 300, 200, 100]
    return this;
  }
}

let numbers = new SinglyLinkedList();
numbers.push(100);
numbers.push(200);
numbers.push(300);
numbers.push(400);
console.log(numbers);

console.log(numbers.reverse());
