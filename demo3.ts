var number=1;
let mynumber=1;
function dosomething(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
    //let variables cannot be accesss outside the block
    console.log("outside loop"+i);
}
dosomething();

//console.log("outside function "+i);

let a1;
//statically specifying the datatypes
let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3,4,5];
let f:any[]=[1,true,123.4,'abcd',false];
//constant variables
const colorRed=0;
const colorGreen=1;
const colorBlue=2;

enum colors{red,green,blue};
let backgroundColor=colors.green;



let log1=function(message)
{
    console.log(message);
}
log1("this is typeScript");
//arrow function equivalent
let doLog=(message)=>console.log(message);
doLog("this is logged using TypeScirpt");
let printHello=()=>{console.log("hello");
printHello;}