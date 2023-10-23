# Recursion

## Overview

This repository contains the solution to the recursion assignment as part of The Odin Project curriculum. The goal of this assignment is to assess my knowledge of recursion and my ability to implement a recursive algorithm to sort an array using the Merge Sort algorithm.

## Assignment Description

The assignment requires I create a function that takes a single array as input and sorts it using the Merge Sort algorithm. Merge Sort is a divide-and-conquer sorting algorithm that recursively divides the input array into smaller sub-arrays, sorts them, and then combines them to produce a sorted output.

## Project Structure

This repository is organized as follows:

- `script.js`: This file contains the JavaScript implementation of the Merge Sort algorithm.

## Getting Started

To get started with this assignment, follow these steps:

1. Clone this repository to your local machine using the following command:
   ```sh
   git clone git@github.com:tennjugu/Recursion.git
   ```

2. Navigate to the project directory:
   ```sh
   cd Recursion
   ```

3. Open the `script.js` file. The function should take an array as input and sort it using the Merge Sort algorithm.

4. Test your implementation by running it with different arrays to ensure that it produces the expected sorted output.

## Testing

You can test your implementation by running the `mergeSort` function with various arrays. Make sure to test it with arrays of different sizes and unsorted orders to verify its correctness.

```javascript
const unsortedArray = [5, 3, 1, 6, 8, 7, 2, 4];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array: ", sortedArray);
```

## Contribution

If you encounter any issues or have suggestions for improvements, feel free to open an issue in this repository.

## Resources

- [Merge Sort Algorithm](https://en.wikipedia.org/wiki/Merge_sort)
- [The Odin Project](https://www.theodinproject.com/)
