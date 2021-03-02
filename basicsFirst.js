let numLives = 9;
undefined
num -= 1;
VM7357:1 Uncaught ReferenceError: num is not defined
    at <anonymous>:1:1
(anonymous) @ VM7357:1
numLives --;
9
numLives --;
8
numLives ++;
7
numLives ++;
8
numLives ++;
9
numLives ++;
10
numLives ++;
11
numLives ++;
12
const luckyNum = 26;
undefined
luckyNum;
26
luckyNum +=1;
VM7663:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:10
(anonymous) @ VM7663:1
const daysInWeek = 7;
undefined
daysInWeek +=1;
VM7797:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:12
(anonymous) @ VM7797:1
daysInWeek
7
luckyNum
26
var runDistance +=1;
VM8053:1 Uncaught SyntaxError: Unexpected token '+='
// No reasont to use Var
undefined


// Able to Change Variable Types in JavaScript

true
true
let isActiveGame = true;
undefined
isActiveGame
true
isLoggedIn = false
false
isLoggedIn
false
isLoggedIn = 1;
1
isLoggedIn
1


// String Methods

let userInput = "    hello my name is Max .   "
undefined

userInput.trim() 
"hello my name is Max ."

userInput.toUpperCase()
"    HELLO MY NAME IS MAX .   "

let greeting = "     helllo again .     "
undefined

let cleanedUpMessage = greeting.trim().toUpperCase ()
undefined

cleanedUpMessage
"HELLLO AGAIN ."


// Slice and Replace

let msg = "Hello my name is Max"
undefined
msg.length
20
msg.slice(18,20)
"ax"
msg.slice(17,20)
"Max"
msg.replace("Hello", "Privet")
"Privet my name is Max"

// Practice Problem Transform word "skateboard" into word "beard"

const word = "skateboard";

let facialHair = word.slice(5,11).replace("o","e");


// String Template Literals

        // Ineffective way

        let name = "Max"
        undefined
        let age = 19
        undefined

        "Hello my name is " + name + " , and I am " + age

// Format is much cleaner and more effective

 `Hello my name is ${name} and I'm {age}. Next year I'll be ${age+1}`
  "Hello my name is Max and I'm {age}. Next year I'll be 20"

// Have to use backtics ` ` and ${ } format






