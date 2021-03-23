
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

// Spread In Function Calls
const nums = [12,334,322,33,4,66,4363]

Math.max(nums)
NaN

Math.max(...nums)
4363            // Need to '...' to 'spread' array into function
