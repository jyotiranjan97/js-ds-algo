## Tree

- A data structure that consists of nodes in a parent / child relationship
- List -> Linear; Tree -> Nonlinear
- A Tree shoud have atleast a **root node** and each child node should have maximum one **parent** node.
- **Root** - The top node in a tree.
- **Child** -A node directly connected to another node when moving away from the Root.
- **Parent** - The converse notion of a child.
- **Siblings** -A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection between one node and another.
- Applications
  - HTML DOM
  - Network Routing
  - Abstract Syntax Tree
  - Artificial Intelligence
  - Folders in Operating Systems
  - Computer File Systems

---

### Binary Tree

Every parent node has at most **two** children

---

### Binary Search Tree

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

#### 1. Insert

- Create a new node
- Starting at the root
- Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

> See [BST.js](BST.js) for implementation

#### 2. Find

- Starting at the root
- Check if there is a root, if not - we're done searching!
  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!

> See [BST.js](BST.js) for implementation

#### Big O

- Insertion - **O(log n)**
- Searching - **O(log n)**
- The above Time complexities are different, if the BST acts as a Singly Linked List
