// While Loop Practice
let count = 0;
while (count < 10){
    console.log(`Hello #${count + 1}`);
    count++;
}

// Mini Password Checker
const SECRET = "BabyHippo";

let guess = prompt("Enter the secret code: ");
while(guess!== SECRET){
    guess = prompt("Enter the secret code: ")
}
console.log("Congrats you got the secret!")

// Break
let input = prompt("Hey say something: ")
while (true){
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me"){
        break;
    }
}
console.log("Ok You Win!")

for (let i = 0; i < 1000; i++){
    console.log(i);
    if (i === 100){
        break;
    }
}
