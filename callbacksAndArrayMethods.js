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