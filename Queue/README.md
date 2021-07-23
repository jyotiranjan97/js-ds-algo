## Queue

- A **FIFO** data structure!
- First element to insert is First element to be Out
- Usecases:
  - Online Game lobby waiting
  - Background tasks
  - Uploading resources
  - Printing / Task processing
- Can be achieved by Array or Singly Linked List implementation

---

### Array Implementation

- push and shift
- unshift and pop

---

### Linked List implementation

#### 1. Enqueue

_Adding to the beginning of the Queue!_

1. This function accepts some value
2. Create a new node using that value passed to the function
3. If there are no nodes in the queue, set this node to be the first and last property of the queue
4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
5. Increment the size of the queue by 1

> See [Queue.js](Queue.js) for implementation

#### 2. Dequeue

_Removing from the beginning of the Queue!_

1. If there is no first property, just return null
2. Store the first property in a variable
3. See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
4. If there is more than 1 node, set the first property to be the next property of first
5. Decrement the size by 1
6. Return the value of the node dequeued

> See [Queue.js](Queue.js) for implementation

#### Search

_Returns true if value exists in the queue_

1. Create a current variable assigning to first
2. Iterate through stack by reassigning current to current.next till current is null
3. If current.val is same as 'value' passed for any current, return true;
4. else return false

> See [Queue.js](Queue.js) for implementation

#### Big O

1. **Insertion** - O(1)
2. **Removal** - O(1)
3. **Searching** - O(N)
4. **Access** - O(N)
