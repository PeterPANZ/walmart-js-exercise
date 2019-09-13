// 3. Write a function that takes a number (from 1 to 12) and return its corresponding month
// name as a string.

function numToMonth (num) {
	let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return month[num - 1];
}
console.log(numToMonth(2));