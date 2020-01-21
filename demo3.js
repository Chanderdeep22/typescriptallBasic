var number = 1;
var mynumber = 1;
function dosomething() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    //let variables cannot be accesss outside the block
    console.log("outside loop" + i);
}
dosomething();
//console.log("outside function "+i);
var a1;
//statically specifying the datatypes
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, true, 123.4, 'abcd', false];
//constant variables
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
;
var backgroundColor = colors.green;
var log1 = function (message) {
    console.log(message);
};
log1("this is typeScript");
//arrow function equivalent
var doLog = function (message) { return console.log(message); };
doLog("this is logged using TypeScirpt");
var printHello = function () {
    console.log("hello");
    printHello;
};
