var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str: " + str);
var str = arr.join(" , ");
console.log("str:" + str);
var str = arr.join(" + ");
console.log("str:" + str);
var str = arr.join(" ");
console.log("str:" + str);
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is: " + element);
var element = numbers.pop();
console.log("element is: " + element);
//push() method appends the given element(s) in the last of the array and return the length of the array
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is:" + numbers);
length = numbers.push(20);
console.log("new numbers is :" + numbers);
//reduce() method applies a function simultaneously against two values of the array from(left-to-right) as to reduce it to a single value
var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
console.log("total is: " + total);
//shift() method removes the first elements from an array and returns that elements 
var arr1 = [10, 1, 2, 3].shift();
console.log("shifted value is :" + arr1);
//some() method tests whether some elements of array passes the test implemented by the provided function.
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var retreval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("returned value is: " + retreval);
var retreval = [12, 5, 8, 1, 4].some(isBigEnough);
console.log("returned value is: " + retreval);
//
var arr = new Array("oranges", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log("Returned string is: " + sorted);
//unshift() method adds one or more elements to the begining of an array and returns the new length of the array
var arr = new Array("oranges", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned string is: " + arr);
console.log("Length of the array is : " + length);
