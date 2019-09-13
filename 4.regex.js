// 4. Write a regular expression that matches any string containing at least one digit

let re = new RegExp(/(.*\d.*)/);
console.log(re.test("test1test02test"));
console.log(re.test("testtesttest"));