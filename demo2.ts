class Point
{
    //public x:number;
    //private y:number;
    //in typeScript we can't have multiple contructor
    //marking variable as ? will make it optional
    //if we define a constructor as public then we don't need to declare that variable
    /*
    constructor(x?:number,y?:number)
    {
        this.x;
        this.y;
    }
    */

    constructor(public x?:number,private y?:number)//public variable(x) is global
    {
        this.x=x;
        this.y=y;
    }
    public draw()
    {
        console.log("x:"+this.x+"y:"+this.y);
    }
    getX()
    {
        return this.x;
    }
    setX(value)
    {
        if(value<0)
        {
            throw new Error("Value cannot be Less then Zero");
        }
        this.x=value;
    }
}
let point =new Point(1,2);
let point1=new Point();
console.log("Value of x:"+point.x);
point.draw();

let xx=point.getX();
console.log("XX is:"+xx);
point.setX(11);
console.log("X value after change:"+point.x);