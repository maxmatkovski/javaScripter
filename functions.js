// Functions

function singSong (){
    console.log('DO')
    console.log('REI')
    console.log('MI')

}

singSong();

// CE 36

function rant (message){
    for(let i = 0; i<=2; i++){
        console.log(`I HATE ${message.toUpperCase()}`)
    }
}

// Functions with Multiple Arguments

function greet(firstName, lastName){
    console.log(`Hey there ${firstName} ${lastName}`)
}

// Function for Snake Eyes
function isSnakeEyes(number1, number2){
    if (number1 === 1 && number2 === 1){
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}


// Sum

function add (x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    } else {
    return x + y;
    }
}

// Multiply
function multiply (number1, number2){
    return number1 * number2;
}

// isShortsWeather
function isShortsWeather(temperature){
    if(temperature >= 75){
        return true;
    } else {
        return false;
    }
}

// CE 40
argument = [''];

function lastElement(argument){
    if (argument == ['']){
        return false;
    } else {
        return argument[argument.length - 1]
    }
}


// CE 41

function capitalize(string){
    return(`${string.slice(0,1).toUpperCase()}${string.slice(1,string.length)}`);
}

// CE 42
let array;
let sum = 0;

function sumArray (array){
        for(let i = 0; i < array.length; i++){
            sum  = sum + array[i];
        }
        return(sum);
}

// CE 43 
function returnDay(number){
    if(1 > number || number > 7){
        return null;
    } else {
        let daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        return (daysOfWeek[number-1]);
    }
}




