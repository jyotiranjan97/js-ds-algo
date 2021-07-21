// piece of data - val
// reference to next node - next

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    // if (index === this.length) {
    //   this.push(value);
    //   return true;
    // }
    // if (index === 0) {
    //   this.unshift(value);
    //   return true;
    // }

    if (index === this.length) !!this.push(value); // !!{value} will coerse the value to boolean
    if (index === 0) !!this.unshift(value);

    let newNode = new Node(value);
    let nodeBeforeIdx = this.get(index - 1);
    newNode.next = nodeBeforeIdx.next;
    nodeBeforeIdx.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) this.pop();
    if (index === 0) this.shift();
    let removableNode = this.get(index);
    let nodeBeforeIdx = this.get(index - 1);
    nodeBeforeIdx.next = removableNode.next;
    removableNode.next = null;
    this.length--;
    return removableNode;
  }
}

// let first = new Node("Hi!, ");
// first.next = new Node("How");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you?");
// console.log(first);

let names = new SinglyLinkedList();

names.push("Ezzio");
names.push("Lionel");
names.push("James");

console.log(names.traverse());
console.log("Pop ->", names.pop());
console.log(names);

names.push("Mike");
console.log("Shift ->", names.shift());
console.log(names);

names.unshift("Victor");
console.log(names);

console.log("Get ->", names.get(1));

console.log("Set ->", names.set(0, "James"));
console.log(names);

// =============================================================

let numbers = new SinglyLinkedList();
numbers.push(100);
numbers.push(200);
numbers.push(400);

numbers.insert(2, 300);
console.log(numbers);

numbers.remove(1);
console.log(numbers);
