/*
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log(person1.name);      // "nicholas"
console.log(person2.name);      // "greg"

person1.sayName();      // Nicholas
person2.sayName();      // Greg

*/

/*

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

Person.prototype.favorites = [];

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

person1.favorites.push("pizza");
person2.favorites.push("burger");

console.log(person1.favorites);
console.log(person2.favorites);

*/

/*

function Person(name) {
    this.name = name;
}

Person.prototype = {
    sayName: function() {
        console.log(this.name);
    },

    toString: function () {
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person("Nicholas");

console.log(person1 instanceof Person);     // true
console.log(person1.constructor === Person);    // false
console.log(person1.constructor === Object);    // true

*/


function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,

    sayName: function() {
        console.log(this.name);
    },

    toString: function() {
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person("Nicholas");
var person2 = new Person("Hreg");

console.log(person1 instanceof Person);     // true
console.log(person1.constructor === Person);    // true
console.log(person1.constructor === Object);     // false

console.log(person2 instanceof Person);     // true
console.log(person2.constructor === Person);     // true
console.log(person2.constructor === Object);    // false

console.log("sayHi" in person1);        // false
console.log("sayHi" in person2);        // false

Object.freeze(person1);

// add a new method
Person.prototype.sayHi = function () {
    console.log("Hi!");
};

person1.sayHi();        // hi
person2.sayHi();        // hi

Array.prototype.sum = function() {
    return this.reduce(function(previous, current) {
        return previous + current;
    });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();

console.log(result);    // 21

String.prototype.autocapitalize = function () {
    return this.charAt(0,6).toUpperCase() + this.substring(1);
};

var message = "hello world!";

console.log(message.autocapitalize());      // Hello World!

var book = {
    title: "The Priciples of Object-Oriented JavaScript"
};

var prototype = Object.getPrototypeOf(book);

console.log(prototype === Object.prototype);    // true

var now = new Date();
var earlier = new Date(2010, 1, 1);

console.log(now > earlier);     // true

/*
var new_book = {
    title: "Elequent JavaScript"
};

var message = "Book = " + new_book;
console.log(message);       // "Book = [object Object]"
console.log(new_book);

*/
/*
var book = {
    title: "The Principles of Object-Oriented JavaScript",
    toString: function () {
        return "[Book " + this.title + "]"
    }
};

var message = "Book = " + book;

// "Book = [Book The Principles of Object-Oriented JavaScript]"
console.log(message);
*/
Object.prototype.add = function (value) {
    return this + value;
};

var book = {
    title: "The Principles of Object-Oriented JavaScript",
};

console.log(book.add(5));       // "[object object]5"
console.log("title".add("end"));        // "titleend"

// in a web browser
console.log(document.add(true));        // "[object HTMLDocument]true"
console.log(window.add(5));        // "[object Window]true"


var add_empty = {};

for(var property in add_empty) {
    console.log(property);
}



var empty = {};

for (var property in empty) {
    if (empty.hasOwnProperty(property)) {
        console.log(property);
    }
}

