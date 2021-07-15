### Merge Sort

> - It's a combination of two things - merging and sorting!
> - Exploits the fact that arrays of 0 or 1 element are always sorted
> - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
>
> As we are splitting array, for that Time Complexity - O(log n)
> Next we are comparing and merge arrays, so for that Time Complexity - O(n)
> Collectively we have Time Complexity - O(n log n)
>
> | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
> | ---------------------- | ------------------------- | ----------------------- | ---------------- |
> | O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |
>
> See [MergeArrays.js](MergeArrays.js) and [MergeSort.js](MergeSort.js) for more implementation
