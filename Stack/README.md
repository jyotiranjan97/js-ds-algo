## Stack

- A **LIFO** data structure!
- The last element added to the stack will be the first element removed from the stack
- e.g. - a **stack** of plates, or a **stack** of markers, As you pile it up the **last thing (or the topmost thing)** is what gets **removed first**.
- Usecases:
  - Managing function invocations
  - Undo / Redo
  - Routing (the history object) is treated like a stack!
- We can implement stack by Array or SinglyLinkedList.

---

### Array Implementation

For Array **push()** and **pop()** works as stack

---

### SinglyLinkedList Implementation

#### 1. Push

_Add a value to the top of the stack!_

1. The function should accept a value
   Create a new node with that value
2. If there are no nodes in the stack, set the first and last property to be the newly created node
3. If there is at least one node, create a variable that stores the current first property on the stack
4. Reset the first property to be the newly created node
5. Set the next property on the node to be the previously created variable
6. Increment the size of the stack by 1

> See [Stack.js](Stack.js) for implementation

#### 2. Pop

_Remove a value from the top of the stack!_

1. If there are no nodes in the stack, return null
2. Create a temporary variable to store the first property on the stack
3. If there is only 1 node, set the first and last property to be null
4. If there is more than one node, set the first property to be the next property on the current first
5. Decrement the size by 1
6. Return the value of the node removed

> See [Stack.js](Stack.js) for implementation

#### Peek

_Returns the top value in the stack without removing it_

1. Return value of the first node of stack without removing it

> See [Stack.js](Stack.js) for implementation

#### Search

_Returns true if value exists in the stack_

1. Create a current variable assigning to first
2. Iterate through stack by reassigning current to current.next till current is null
3. If current.val is same as 'value' passed for any current, return true;
4. else return false

> See [Stack.js](Stack.js) for implementation

#### Big O

1. **Push** - O(1)
2. **Pop** - O(1)
3. **Peek** - O(1)
4. **Search** - O(n)
