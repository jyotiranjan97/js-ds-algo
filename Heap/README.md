## Binary Heap

- Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
- They are also used quite a bit, with graph traversal algorithms

---

### Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

#### 1. Insert

- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!

> See [MaxBinaryHeap.js](MaxBinaryHeap.js) for implementation.

#### 2. Extract Max

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...​
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 \* index + 1 (make sure its not out of bounds)
  - Find the index of the right child: 2\*index + 2 (make sure its not out of bounds)
  - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  - The child index you swapped to now becomes the new parent index.
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old root!

> See [MaxBinaryHeap.js](MaxBinaryHeap.js) for implementation.

---

### Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

- Write a Min Binary Heap - lower number means higher priority.
- Each Node has a val and a priority. Use the priority to build the heap.
- Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
- Dequeue method removes root element, returns it, and rearranges heap using priority.

> See [PriorityQueue.js](PriorityQueue.js) for implementation.

---

### Big O

Time Complexity - O(log n)
