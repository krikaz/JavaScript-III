/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding. If no object is binding, this bind to the default window object.
* 2. Implicit Binding. This binds to the left object.
* 3. New Binding. This binds to the new object created with an object constructor.
* 4. Explicit Binding. This binds to the object passed as an argument with .call .apply or .bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
function Person (name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`I am ${this.name}`);
}

// Principle 3
// code example for New Binding
const jack = new Person('Jack');
jack.greet()

// Principle 4
// code example for Explicit Binding
const greeter = Person.prototype.greet;
const jeff = new Person('Jeff');
greeter.call(jeff);