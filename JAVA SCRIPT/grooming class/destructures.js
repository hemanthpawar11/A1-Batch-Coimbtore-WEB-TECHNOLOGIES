// exapmle 
// ^ exapmle
// ~ exapmle
// ? example
// & example
// * example
// ! example 

// ~ Array Destructuring

// Without destructuring
const numbers = [10, 20, 30];
const first = numbers[0];
const second = numbers[1];


console.log(first, second); // 10 20

// With destructuring
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30


// & You can also skip elements:

const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// !Add default values:

const [p = 5, q = 10] = [7];
console.log(p, q); // 7 10


// ~ Object Destructuring

// Without destructuring
const person = { name: 'Alice', age: 25 };
const name = person.name;
const age = person.age;

console.log(name, age); // Alice 25

// With destructuring
const { name: userName, age: userAge } = person;
console.log(userName, userAge); // Alice 25


// ? You can rename variables while destructuring:

const { name: n, age: a } = person;
console.log(n, a); // Alice 25


// ? Add default values:

const { city = 'Unknown' } = person;
console.log(city); // Unknown


// ^ 3. Nested Destructuring


const user = {
  id: 1,
  info: {
    name: 'John',
    email: 'john@example.com'
  }
};

// Access nested properties easily
const { info: { name, email } } = user;
console.log(name, email); // John john@example.com



// * 4. Destructuring Function Parameters

function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

const person = { name: 'Bob', age: 30 };
greet(person); // Hello Bob, you are 30 years old.



