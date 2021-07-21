# Linked List

- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

> #### Array vs Linked List
>
> | Lists                                   | Arrays                                      |
> | --------------------------------------- | ------------------------------------------- |
> | Do not have indexes!                    | Indexed in order!                           |
> | Connected via nodes with a next pointer | Insertion and deletion can be expensive     |
> | Random access is not allowed            | Can quickly be accessed at a specific index |

---

## Singly Linked List

> ### Pushing
>
> **Adding a new node to the end of the Linked List!**
>
> - This function should accept a value
> - Create a new node using the value passed to the function
> - If there is no head property on the list, set the head and tail to be the newly created node
> - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
> - Increment the length by one
> - Return the linked list
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Pop
>
> **Removing a node from the end of the Linked List!**
>
> - If there are no nodes in the list, return undefined
> - Loop through the list until you reach the tail
> - Set the next property of the 2nd to last node to be null
> - Set the tail to be the 2nd to last node
> - Decrement the length of the list by 1
> - Return the value of the node removed
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Shift
>
> **Removing a new node from the beginning of the Linked List!**
>
> - If there are no nodes, return undefined
> - Store the current head property in a variable
> - Set the head property to be the current head's next property
> - Decrement the length by 1
> - Return the value of the node removed
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Unshift
>
> **Adding a new node to the beginning of the Linked List!**
>
> - This function should accept a value
> - Create a new node using the value passed to the function
> - If there is no head property on the list, set the head and tail to be the newly created node
> - Otherwise set the newly created node's next property to be the current head property on the list
> - Set the head property on the list to be that newly created node
> - Increment the length of the list by 1
> - Return the linked list
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Get
>
> **Retrieving a node by it's position in the Linked List!**
>
> - This function should accept an index
> - If the index is less than zero or greater than or equal to the length of the list, return null
> - Loop through the list until you reach the index and return the node at that specific index
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Set
>
> **Changing the value of a node based on it's position in the Linked List**
>
> - This function should accept a value and an index
> - Use your get function to find the specific node
> - If the node is not found, return false
> - If the node is found, set the value of that node to be the value passed to the function and return true
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Insert
>
> **Adding a node to the Linked List at a specific position**
>
> - If the index is less than zero or greater than the length, return false
> - If the index is the same as the length, push a new node to the end of the list
> - If the index is 0, unshift a new node to the start of the list
> - Otherwise, using the get method, access the node at the index - 1
> - Set the next property on that node to be the new node
> - Set the next property on the new node to be the previous next
> - Increment the length
> - Return true
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Remove
>
> **Removing a node from the Linked List at a specific position**
>
> - If the index is less than zero or greater than the length, return undefined
> - If the index is the same as the length-1, pop
> - If the index is 0, shift
> - Otherwise, using the get method, access the node at the index - 1
> - Set the next property on that node to be the next of the next node
> - Decrement the length
> - Return the value of the node removed
>
> See [SinglyLinkedList.js](SinglyLinkedList.js) for implementation.

> ### Reverse
>
> **Reversing the Linked List in place!**
>
> - Swap the head and tail
> - Create a variable called next
> - Create a variable called prev
> - Create a variable called node and initialize it to the head property
> - Loop through the list
> - Set next to be the next property on whatever node is
> - Set the next property on the node to be whatever prev is
> - Set prev to be the value of the node variable
> - Set the node variable to be the value of the next variable
> - Once you have finished looping, return the list
>
> See [ReverseLinkedList.js](ReverseLinkedList.js) for implementation.

> ### Big O
>
> 1. **Insertion** at beginning or end - O(1)
> 2. **Insertion** in middle - O(N) where N is the index where to insert
> 3. **Removal** at beginning or end - O(1)
> 4. **Removal** in middle - O(N) where N is the index where to remove
> 5. **Searching** - O(N)
> 6. **Access** - O(N)

### Summary

- Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues
