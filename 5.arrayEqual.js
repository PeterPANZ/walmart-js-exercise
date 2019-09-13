// 5. Write a function that returns true if two arrays are identical, and false otherwise.

function checkEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

let a = [1, 2, 3, 4];
let b = [1, 2, '3', 4];
let c = [1, 2, 3, 4];
console.log(checkEqual(a,b));
console.log(checkEqual(a,c));