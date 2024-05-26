const user={
    name:"hitesh",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.name} welocome to website`);
        console.log(this);
    }

}
// user.welcomeMsg()
// user.name="sam"
// user.welcomeMsg()
// console.log(this); // here it returns an empty object but in browser it returns windows object coz thats the default global object in browser environment

function fun(){
    let username ="Rushi"
    // console.log(this.username);//undefined
}
fun()

const gunc = () =>{
    let username ="Rushi"
    console.log(this);
}
// gunc()

// arrow function

// const addTwo = (num1,num2) =>{ //explicit return
//     return num1+num2
// }
// const addTwo = (num1,num2) => num1+num2 //impicit return
// const addTwo = (num1,num2) => (num1+num2) //impicit return
// const addTwo = (num1,num2) => {name:"Rushi"} // wont work if u want to return object
const addTwo = (num1,num2) => ({name:"Rushi"}) 
console.log(addTwo(3,4));