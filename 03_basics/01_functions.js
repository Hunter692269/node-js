

function sayHi(){
    console.log("h");
    console.log("i");
    console.log("i");
}

// sayHi()

// function addTwo(num1,num2){
//     console.log(num1+num2);
// }

function addTwo(num1,num2){
    let result = num1+num2
    return result;
}
const result = addTwo(3,4)
// console.log(result);

function logIn(username = "man"){
    if(username === undefined){
        console.log("enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(logIn("hello"))
console.log(logIn());