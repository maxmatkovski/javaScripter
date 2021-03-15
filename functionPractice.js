// Block Scope
for (let i = 0; i < 5; i++) {
    let msg = 'aljkdlj';
}
console.log(msg);

// Lexical Scope
function bankRobbery (){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther','BATWOMAN'];
    function cryForHelp(){
        function inner(){
            for (let hero of heroes){
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner ();
    }
    cryForHelp();
}
        // Notice how when using nested functions, it's important to call the function outside of itself

// Function expression
const add = function (x,y) {
    return x + y;
}
       // Storing function with no name into constant variable 

// Quick Practice
let square = function (x){
    return (x * x);
}

// Passing Functions As Arguments

function callFunctionTimes(func, number){
    for (let i = 0; i < number; i++){
        func();
    }
}

function rollDie (){
    const roll = Math.floor(Math.random() * 10) + 1;
    console.log(roll);
}

callFunctionTimes(rollDie, 10);

// Returning Functions Continued
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > .5){
        return function (){
            console.log("CONGRATS I AM A GOOD FUNCTION");
            console.log("YOU WIN A MILLION DOLLARS");
        }
    } else {
        return function (){
            console.log("YOU HAVE BEEN INFECTED BY COVID");
            alert("STOP TRYING TO CLOSE THIS WINDOW")
        }
    }
}

const mysteryVariable = makeMysteryFunc();
mysteryVariable();

// 
function isBetween(num){
    return num >= 50 && num <= 100;
} // Default return value is Boolean

function isBetween1And10(num){
    return num >= 1 && num <= 10;
} 

// FUNCTION GENERATOR!!!!!
function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max
    }
}

const isChild = makeBetweenFunc(0,18);

isChild(19)
false

// Function Methods
const myMath = {
    PI: 3.1459,
    square: function (num){
        return num * num;
    },
    cube: function (num){
        return num ** 3;
    }
}

myMath.PI
3.1459
myMath.square(3)
9
myMath.cube(3)
27
myMath.cube(4)
64

// Function Method Shortcuts
const myMath = {
    PI: 3.1459,
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}

// CE 45 - Methods Practice 
const square = {
    area(side){
        return side * side;
    },
    perimeter(side){
        return side *4;
    }
}

// Keyword 'this'
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log('Meow, Meow, Meow')
    }
}

cat.meow()
app.js:7 Meow, Meow, Meow


// Keyword 'this'
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(color)
    }
}

cat.meow()
app.js:7 Uncaught ReferenceError: color is not defined
    at Object.meow (app.js:7)
    at <anonymous>:1:5          // Can't just call property within function like that


