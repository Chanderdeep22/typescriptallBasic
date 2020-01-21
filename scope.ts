var global_num=12;//global variable
class Numbers{
    num_val=13;//class variable
    static sval=10;//static field

    storeNum():void{
        var local_num=14;//local variable
    }
}
console.log("Global num:"+global_num);
console.log(Numbers.sval);//static variable
var obj1=new Numbers();
console.log("Global num: "+obj1.num_val);

var num = 12;
console.log(typeof num);//output number