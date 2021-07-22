class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  reverse() {
    let current = this.head;
    this.tail = this.head;

    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp) {
      this.head = temp.prev;
    }
    return this;
  }
}
