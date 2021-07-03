# Problem Solving Patterns

### 1. Frequency Counter

> This pattern uses objects or sets to collect **values**/**frequencies of values**.
>
> This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.
>
> See [SquaredArray.js](SquaredArray.js) and [Anagram.js](Anagram.js) for details

### 2. Multiple Pointers

> Creating **pointers** or **values** that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
>
> Very efficient for solving problems with minimal space complexity as well.
>
> See [SumZero.js](SumZero.js) and [CountUniqueValues.js](CountUniqueValues.js) for details

### 3. Sliding Window

> This pattern involves creating a **window** which can either be an array or number from one position to another
>
> Depending on a certain condition, the window either increases or closes (and a new window is created)
>
> Very useful for keeping track of a subset of data in an array/string etc.
>
> See [MaxSubArraySum.js](MaxSubArraySum.js) for details

### Divide and Conquer

> This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
>
> This pattern can tremendously **decrease time complexity**.
>
> See [SearchSort.js](SearchSort.js) for details
