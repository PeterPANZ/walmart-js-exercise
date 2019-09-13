// 2. Using a single line of code, reverse the order of words in the string below:
// var dwarves = "bashful doc dopey grumpy happy sleepy
// sneezy"

let dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
let result = dwarves.split(' ').reverse().join(' ');
console.log(result);