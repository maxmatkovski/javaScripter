
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
