// Declaring Arrays

let colors = ["hello", "friend"]
undefined
colors
(2) ["hello", "friend"]
colors [0]
"hello"

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
undefined
days
(7) ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
days.length
7

// Arrays and Array Length

let colors = ["Red","Blue"]
undefined
colors [0] = "Yellow"
"Yellow"
colors
(2) ["Yellow", "Blue"]
colors [10]
undefined
colors [10] = "Purple"
"Purple"
colors
(11) ["Yellow", "Blue", empty × 8, "Purple"]
colors.length
11

// javaSript Push

let movieLine = ['tom','nancy']
undefined
movieLine [2] = 'pablo'
"pablo"
movieLine
(3) ["tom", "nancy", "pablo"]
movieLine.push('oliver')
4
movieLine
(4) ["tom", "nancy", "pablo", "oliver"]

  // changes actual array 


// Pop 

movieLine
(3) ["tom", "nancy", "pablo"]
movieLine.pop()
"pablo"
movieLine
(2) ["tom", "nancy"]



// Push vs Unshift vs Pop vs Shift

const numbers = [1,2,3,4,5]
undefined
numbers.push (6)
6
numbers
(6) [1, 2, 3, 4, 5, 6]
                        // Push adds to the end

numbers.unshift(0)
7
numbers
(7) [0, 1, 2, 3, 4, 5, 6]

                       // Unshift adds to the beginning
numbers.pop()
6
numbers
(6) [0, 1, 2, 3, 4, 5]

                       // Pop Removes From The End

numbers.shift ()
0
numbers
(5) [1, 2, 3, 4, 5]
                      // Shift removes from the beginning

let cats = ['blue', 'kitty']
undefined
let dogs = ['rusty','wyatt']
undefined
cats.concat(dogs)
(4) ["blue", "kitty", "rusty", "wyatt"]
let comboAnimals = cats.concat(dogs)
undefined
comboAnimals
(4) ["blue", "kitty", "rusty", "wyatt"]
cats.includes('wyatt')
false
comboAnimals.includes('blue')
true
"Blue".indexOf('l')
1
comboAnimals.indexOf('rusty')
2
comboAnimals.indexOf('BLUE')
-1
// Returns -1 not in array
undefined
comboAnimals
(4) ["blue", "kitty", "rusty", "wyatt"]
comboAnimals.reverse()
(4) ["wyatt", "rusty", "kitty", "blue"]
// Changes actual array


let colors = ["red","blue","green", "orange"]
undefined
let colorsCopy = colors.slice()
undefined
colorsCopy.reverse()
(4) ["orange", "green", "blue", "red"]
colors
(4) ["red", "blue", "green", "orange"]
colorsCopy
(4) ["orange", "green", "blue", "red"]
// Slice with nothing passed in makes a copy of the Array


// Flatten Array of Arrays

let flattenedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flattenedArray);
