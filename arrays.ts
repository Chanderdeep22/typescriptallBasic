/*
featuring of an Array
Here is a list of the features of an array-
An array declaration allocates sequential memory blocks.
Arrays are static.This means that an array once initiated can't be resized.
Each memory block represents an array element.
Array elements are identified by a unique integer called as the subscript/index of the element.
Like variables, arrays too,should be declared before they are used. Use var keyword to declare an array.
Array initialisation refers to populating the array elements.
Array element values can be updated or modified but not connot be deleted.
*/

var alphas:string[];
alphas = ["1","2","3","4","5"];
console.log(alphas[0]);
console.log(alphas[1]);


var nums:number[] = [1,2,3,3];
console.log(nums[0]);
console.log(nums[3]);


var arr_names:number[] = new Array(4);
for(var i=0;i<arr_names.length;i++){
    arr_names[i] = i*2;
    console.log(arr_names[i]);
}


var names:string[]  = new Array("Mary","Tom","Jack","Jill");

for(var i=0;i<names.length;i++){
    console.log(names[i]);
    
}