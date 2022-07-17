/*var name = "Nicholas";
var lowercaseName = name.toLowerCase();
var firstLetter = name.charAt(0);
var middleOfName = name.substring(2, 5);

var count = 10;
var fixedCount = count.toFixed(2);
var hexCount = count.toString(16);

var flag = true;
var stringFlag = flag.toString();*/
/*
console.log(typeof "Nicholas"); // "string"
console.log(typeof 10); // "number"
console.log(typeof 5.1); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"*/
/*
var name = "Nicholas";
var lowercaseName = name.toLowerCase();    // convert to lowercase
var firstLetter = name.charAt(0);          // get first character
var middleOfName = name.substring(2, 5);   // get characters 2-4
var count = 10;
var fixedCount = count.toFixed(2);         // convert to "10.00"
var hexCount = count.toString(16);         // convert to "a"
var flag = true;
var stringFlag = flag.toString();          // convert to "true"

console.log(name);
console.log(lowercaseName);
console.log(firstLetter);
console.log(middleOfName);
console.log(count);
console.log(fixedCount);
console.log(hexCount);
console.log(flag);
console.log(stringFlag);
 */

var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");
var colors = ['red', 'green', 'blue'];
var book = new Object();
book.name = "The OOP";
book.year = 2014;
function reflect(value) {
    return value;
}

console.log(items);
console.log(now);
console.log(error);
console.log(func);
console.log(object);
console.log(re);
console.log(book);
console.log(colors[0]);
console.log(colors);
console.log(typeof reflect);

var items = [];
var object = {};

function reflects(value) {
    return value;
}

console.log(items instanceof Array);
console.log(object instanceof Object);
console.log(reflects instanceof Function);


var itemss = [];
console.log(Array.isArray(items));

var result = add(5, 5);

function add(num1, num2) {
    return num1 + num2;
}

console.log(result);

function sayHi() {
    console.log("Hi!");
}

sayHi();

var sayHi2 = sayHi;
sayHi2();

var numbers = [1, 5, 8, 4, 7, 10, 2, 6];
numbers.sort(function(first, second) {
    return first - second;
});

console.log(numbers);

numbers.sort();
console.log(numbers);

function sum() {
    var result = 0, i = 0, len = arguments.length;

    while (i < len) {
        result += arguments[i];
        i++;
    }

    return result;
}

console.log(sum(1, 2));
console.log(sum(3, 4, 5, 6));
console.log(sum(50));
console.log(sum());


function sayNameForAll() {
    console.log(this.name);
}

var person1 = {
    name: "Nicholas",
    sayName: sayNameForAll
};

var person2 = {
    name: "Greg",
    sayName: sayNameForAll
};

var name = "Michael";

person1.sayName();
person2.sayName();
sayNameForAll();

var person11 = {
    name: "Nicholas"
};

console.log("name" in person11);

delete person11.name;

console.log("name" in person11);
console.log(person11.name);

var person12 = {
    _name: "Nicholas",

    get name() {
        console.log("Reading name");
        return this._name;
    },

    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};

console.log(person12.name);

person12.name = "Greg";
console.log(person12.name);

var person22 = {
    name: "Nicholas"
};

Object.defineProperty(person22, "name", {
    enumerable: false
});

console.log("name" in person22);
console.log(person22.propertyIsEnumerable("name"));

var properties = Object.keys(person22);
console.log(properties.length);

Object.defineProperty(person22, "name", {
    configurable: false
});

// try to delte the Property/*
/*delete person22.name;
console.log("name" in person22);
console.log(person22.name);

Object.defineProperty(person22, "name", {
    configurable: true
});
*/

var person33 = {};

Object.defineProperty(person33, "name", {
    value: "Nicholas"
});

console.log("name" in person33);
console.log(person33.propertyIsEnumerable("name"));

delete person33.name;
console.log("name" in person33);

person33.name = "Greg";
console.log(person33.name);