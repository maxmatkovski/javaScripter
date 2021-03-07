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
