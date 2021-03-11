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
