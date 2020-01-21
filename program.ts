class Car{
    engine:string;
    constructor(engine:string){
        this.engine=engine
    }
    disp():void{
        console.log("Function displays Engine is : "+this.engine)
    }
}
//create an object
var obj =new Car("XXSYI")
//access the field
console.log("Reading attribute value Engine as :"+ obj.engine)
//access the function
obj.disp()