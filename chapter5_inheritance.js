/*

var book = {
    title: "The Principles of Object-Oriented JavaScript",
};

// is the same as

var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "The Principles of Object-Oriented JavaScript",
        writable: true
    }
});

*/


var person1 = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable: true
    }
});

person1.sayName()       // outputs "Nicholas"
person2.sayName()       // outputs "Greg"

console.log(person1.hasOwnProperty("sayName"));     // true
console.log(person1.isPrototypeOf(person2));        // true
console.log(person2.hasOwnProperty("sayName"));     // false

var nakedObject = Object.create(null);

console.log("toString" in nakedObject);     // false
console.log("valueOf" in nakedObject);      // false
/*
// you write this
function YourConstructor() {
    // initialization
}

// JavaScript engine does this for you behind the scenes
YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: YourConstructor
        writable: true
    }
});
*/

function  Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

Rectangle.prototype.toString = function () {
    return "[Rectangle " + this.length + "x" + this.width + "]";
};

// inherits from Rectangle
function Square(size) {
    this.length = size;
    this.width = size;
}

Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
    return "[Square " + this.length + "x" + this.width + "]";
};

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea());        // 50
console.log(square.getArea());      // 36

console.log(rect.toString());       // "[Rectangle 5x10]"
console.log(square.toString());     // "[Square 6x6]"

console.log(rect instanceof Rectangle);     // true
console.log(rect instanceof Object);        // true

console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);       // true
console.log(square instanceof Object);      // true

