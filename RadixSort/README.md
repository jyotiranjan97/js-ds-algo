### Radix Sort

> - Radix sort is a special sorting algorithm that works on lists of numbers.
> - It exploits the fact that information about the size of a number is encoded in the number of digits.
> - It never makes comparisons between elements!
> - More digits means a bigger number!
>
> #### Big O
>
> | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
> | ---------------------- | ------------------------- | ----------------------- | ---------------- |
> | O(nk)                  | O(nk)                     | O(nk)                   | O(n + k)         |
>
> n - length of array; k - number of digits(average)
>
> See [Helper.js](Helper.js) and [Radix.js](Radix.js) for implementation.

## Summary for Sorting Algorithms

- Merge sort and Quick sort are standard efficient sorting algorithms.
- Quick sort can be slow in the worst case, but is comparable to merge sort on average.
- Merge sort takes up more memory because it creates a new array (in-place merge sorts exist, but they are really complex!).
- Radix sort is a fast sorting algorithm for numbers.
- Radix sort exploits place value to sort numbers in linear time (for a fixed number of digits).
