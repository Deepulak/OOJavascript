/*

var person = (function () {
    var age = 25;
    return {
        name: "Nicholas",

        getAge: function () {
            return age;
        },

        growOlder: function () {
            age++;
        }
    };
}());

console.log(person.name);       // "Nicholas"
console.log(person.getAge());       // 25

person.age = 100;
console.log(person.getAge());       // 25

person.growOlder();
console.log(person.getAge());       // 26

*/

// example using the revealing module pattern as follows
/*
var person = (function () {
    var age = 25;

    function getAge() {
        return age;
    }

    function growOlder() {
        age++;
    }

    return {
        name: "Nicholas",
        getAge: getAge,
        growOlder: growOlder
    };
}());

console.log(person.name);       // "Nicholas"
console.log(person.getAge());       // 25

person.age = 100;
console.log(person.getAge());       // 25

person.growOlder();
console.log(person.getAge());       // 26
*/

// private member for constructor
/*
function Person(name) {
    // define a variable only accessible inside
    // of the person constructor
    var age = 25;

    this.name = name;

    this.getAge = function() {
        return age;
    };
    this.growOlder = function () {
        age++;
    };
}

var person = new Person("NIcholas")

console.log(person.name);       // "Nicholas"
console.log(person.getAge());       // 25

person.age = 100;
console.log(person.getAge());       // 25

person.growOlder();
console.log(person.getAge());       // 26
*/

/*
If you want private data to be shared across all instances (as if it were
on the prototype), you can use a hybrid approach that looks like the mod�ule pattern but uses a constructor:
 */

var Person = (function () {
    // everyone shares the same age
    var age = 25;

    function InnerPerson(name) {
        this.name = name;
    }

    InnerPerson.prototype.getAge = function () {
        return age;
    };

    InnerPerson.prototype.growOlder = function () {
        age++;
    };

    return InnerPerson;
}());


var person1 = new Person("NIcholas");
var person2 = new Person("Greg");

console.log(person1.name);      // "nicholas"
console.log(person1.getAge());      // 25

console.log(person2.name);      // "greg"
console.log(person2.getAge());       // 25

person1.growOlder();
console.log(person1.getAge());      // 26
console.log(person2.getAge());      // 26

// how to do mixins

function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) [
            receiver[property = supplier[property]]
        ]
    }

    return receiver;
}

function EventTarget() {

}

EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function(type, listener) {
        // create an array if it doesn't exist
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }

        if (typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    },

    fire: function (event) {
        if(!event.target) {
            event.target = this;
        }

        if (!event.type) {
            // falsy
            throw new Error("Event object missing 'type' property." );
        }

        if(this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
        }
    },

    removeListener: function (type, listener) {
        if (this._listeners && this._listeners[type] instanceof Array) {
            var listeners = this._listeners[type];
            for (var i=0, len=listeners.length; i < len; i++) {
                if(listeners[i] === listeners) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};

var target = new EventTarget();
target.addListener("message", function (event) {
    console.log("Message is " + event.data);
})

target.fire({
    type: "message",
    data: "Hello world!"
});

var person = new EventTarget();
person.name = "Nicholas";
person.sayName = function () {
    console.log(this.name);
    this.fire({ type: "namesaid", name: name});
};

// A second way to solve this problem is to use pseudoclassical
// inheritance:
/*
function Person(name) {
    this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;

Person.prototype.sayName = function () {
    console.log(this.name);
    this.fire({ type: "namesaid", name:name });
};

var person1 = new Person("Nicholas");

console.log(person1 instanceof Person);     // true
console.log(person1 instanceof EventTarget)     // true

*/

//By using a mixin instead
// , you can reduce the amount of code neces�sary to assign those new properties to the prototype:

function Person(name) {
    this.name = name;
}

mixin(Person.prototype, new EventTarget());
mixin(Person.prototype, {
    constructor: Person,

    sayName: function () {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
    }
});

var person2 = new Person("Nicholas");

console.log(person2 instanceof Person);     // true
console.log(person2 instanceof EventTarget);        // false


// you don’t want a constructor of pseudoclassical inheritance at
// all. In that case, you can use a mixin directly when you create your new
// object:


var person3 = mixin(new EventTarget(), {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
    }
});

console.log(person.name);

// That’s because
// the receiver properties are being created by assignment rather than by
// Object.defineProperty(), meaning the current value of the supplier prop�erty is read and then assigned to a property of the same name on the
// receiver. For example:

var person4 = mixin(new EventTarget(), {
    get name() {
        return "Nicholas"
    },
    sayName: function () {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
    }
});

console.log(person4.name);      // nicholas
person4.name = "Greg";
console.log(person4.name);      // greg