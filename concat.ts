var str1="this is a string one";
var str2="this is string two";
var str3="this is string three";
console.log("str1 +str2"+str3);

var index=str1.indexOf("string");
console.log("indexOf found string:"+index);

var index=str1.indexOf("one");
console.log("indexOf found string:"+index);

var str4="Apples are round,and Apples are juicy.";
var newstr=str4.replace("Apples","Oranges");
console.log(newstr);

if(str4.search("Apples")==-1)
{
    console.log("Does not contain Apples");
}
else
{
    console.log("Contains Apples");
}

var sliced=str4.slice(3, -2);
console.log(sliced);

var splitted=str4.split(" ");
console.log(splitted);

console.log("(1,2)  :"+str4.substring(1,2));
console.log("(0,10)  :"+str4.substring(0,10));
console.log("(5)  :"+str4.substring(5));