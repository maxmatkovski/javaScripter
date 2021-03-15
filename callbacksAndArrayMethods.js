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
