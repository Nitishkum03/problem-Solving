function targetSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
}
const arr = [5, 2, 8, 1, 9];
console.log(targetSearch(arr, 8)); // Output: 2 (index of 8 in the array)
console.log(targetSearch(arr, 10)); // Output: -1 (10 is not in the array)

