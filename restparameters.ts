/*
Rest papameters are similar to variable arguments in Java.
Rest papameters don't restrict the number of values that you can pass to a function
however,the vaues passed must al be of same type.
In other words, rest parmeters act as paceholders for mutiple arguments of the same type.
*/

function addNumbers(...nums:number[])
{
    var i;
    var sum:number=0;

    for(i=0;i<nums.length;i++)
    {
        sum =sum + nums[i];
    }
    console.log("sum of the numbers"+sum);
}
addNumbers(1,2,3);
addNumbers(10,10,10,10,10);