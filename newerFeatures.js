
// Default Parameters

// Old Way of Setting Default Params

function rollDie(numSides){
    if(numSides === undefined){
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}

// New / Better Way
function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}

// Another Example
function greet(msg = 'Hey there', person){
    console.log(`${msg}, ${person}!`)
}

// Need default parameter to be after the first

function greet(person, msg = 'Hey there'){
    console.log(`${msg}, ${person}!`)
}
