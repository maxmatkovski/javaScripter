// Ternary Operator

// condition ? expr1 : expr 2

    // Traditional If Statement
let age = 15;

if(age >= 18){
    console.log('You are an adult')
} else {
    console.log('You are not an adult')
};

    // Teranary Operator
let age = 15;
console.log((age >= 18)? "You are an adult!" : "You are a kid.");


// What will happen when the following is run?

function doSomething () {
    console.log('hello');
}

let example = true;
example && doSomething();

    // console.log('hello'); will run
    // true allows && to run, while false will not
