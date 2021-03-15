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
