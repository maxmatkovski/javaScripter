// Callbacks and Array Methods
const numbers = [1,2,3,4,5,6,7,8,9]

function print(element){
    console.log(element)
}

numbers.forEach(print)

  // better format - forEach
numbers.forEach(function(el)){
    console.log(el)
}

// forEach with If Statement
numbers.forEach(function(el){
    if (el % 2 === 0){
        console.log(el)
    }
})

// Map creates a new array 

const numbers = [1,2,3,4,5,6,7,8,9]

numbers.map(function(num){
    return num * 2;
})

// CE 47 
function cleanNames(name){
    return name.map(i => i.trim());
}

// Arrow Functions
const add = (x,y) => {
    return x + y;
}
            // Only difference is not using function keyword

// Square Arrow Function
const square = (x) => {
    return x ** 2;
}

// rollDie Arrow Function
const rollDie = () =>{
    return Math.floor(Math.random() * 6) + 1;
}

// CE 48
const greet = (n) => {
    return (`Hey ${n}!`);
}       // Problem wasn't even hard. Instruction were just unclear.

// Implicit Return (New shortened syntax for arrow functions)
const rollDie = () => (
   Math.floor(Math.random() * 6) + 1
)

// setTimeout
setTimeout (() => {
    console.log('HELLO!!!!')
}, 3000)

        // (Function, # of Milliseconds)

// Set Interval
setInterval ( () => {
    console.log(Math.random())
}, 2000);

// How to stop interval
const id = setInterval ( () => {
    console.log(Math.random())
}, 2000);

clearInterval(id)

// Filter Method

const numbers = [9,8,7,6,5,4,3,2,1];

numbers.filter(n => {
    return n < 10
})

// Returns all numbers < 10 in new array

// Some and Every JavaScript Functions

const exams = [80, 98, 92, 78, 76, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)

// Returns true because all values are greater/equal to 75. 

const exams = [80, 98, 92, 70, 76, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)

// Returns False if I change a number which doesn't meet the parameter.

    // Some is similar to Every but only checks for 'some'

    const exams = [80, 98, 92, 70, 76, 90, 89, 84, 81, 77]

    exams.some(score => score >= 75)

    true

    exams.every(score => score >= 75)
    ​
    false

