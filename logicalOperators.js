let firstName = prompt ("enter your first name");

if(!firstName){
    firstName = prompt("enter your first name")
}

// ! negates whatever it is applied to


// Swtich Statement in JS

const day = 0;
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("I don't know")
}
