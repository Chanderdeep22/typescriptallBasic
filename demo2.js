var Point = /** @class */ (function () {
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
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x:" + this.x + "y:" + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be Less then Zero");
        }
        this.x = value;
    };
    return Point;
}());
var point = new Point(1, 2);
var point1 = new Point();
console.log("Value of x:" + point.x);
point.draw();
var xx = point.getX();
console.log("XX is:" + xx);
point.setX(11);
console.log("X value after change:" + point.x);
