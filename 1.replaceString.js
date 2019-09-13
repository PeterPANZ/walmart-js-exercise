// 1. Write a custom method to replace the string "The quick brown fox jumps
// over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
// over6 the7 lazy8 dog9"

let str = "The quick brown fox jumps over the lazy dog";
const arr = str.split(" ");
const ans = arr.map((val, index) => (val += index + 1)).join(" ");
console.log(ans);