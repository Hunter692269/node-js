

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
// console.log(logIn());



function calcPrice(...num3){  //using REST operator here creates an array of all the passed values
    return num3;
}
function calcPrice2(val1,val2,...num3){  //so 1st 2 values in val1 and val2 and rest in num1 array
    return num3;
}
// console.log(calcPrice(200,300,400));
// console.log(calcPrice2(200,300,400,300,450));

const user = {
    username:"hi",
    price:100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)


const myArray =[200,300,400]

function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray));