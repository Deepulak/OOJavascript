var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
console.log(Object.isFrozen(person1)); // false
 Object.freeze(person1);
 console.log(Object.isExtensible(person1)); // false
 console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // true
person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1); // false
 person1.name = "Greg";
console.log(person1.name); // "Nicholas"
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false

/*
function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    };
}

var person1 = new Person("Nicholas");
var person2 = new Person("Greg")

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName();*/
/*
function Person(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function (newName) {
            name = newName;
        },
        enumerable: true;
        configurable: true
    });

    this.sayName = function () {
        console.log(this.name);
    };
}
*/
/*var person1 = Person("Nicholas");

console.log(person1 instanceof Person);
console.log(typeof person1);
console.log(name);
*/

var book = {
    title: "The Principles of Object-Oriented Javascript"
};

console.log("title" in book);
console.log(book.hasOwnProperty("title"));
console.log("hasOwnProperty" in book);
console.log(book.hasOwnProperty("hasOwnProperty"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));


var object = {};

console.log(object.toString());     // "[object Object]"

object.toString = function () {
    return "[object Custom]";
};

console.log(object.toString());     // "[object Custom]"

// delete own property
delete object.toString;

console.log(object.toString());     // "[object Object]"

// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString());     // ["object Object"]


function Pers(name) {
    this.name = name;
}

Pers.prototype.sayName = function () {
    console.log(this.name);
};

var pers1 = new Pers("Dee");
var pers2 = new Pers("Pul");

console.log(pers1.name);
console.log(pers2.name);

pers1.sayName("Pul");
pers2.sayName("Dee");

