//singleton object
const obj = new Object();

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


//from database

const users = [
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:2,
        email:"2@gmail.com"
    },
    {
        id:3,
        email:"3@gmail.com"
    }
]
console.log(users[1].email);
console.log(Object.keys(users[1]));
console.log(Object.values(users[1]));
console.log(Object.entries(users[1]));

console.log(users[1].hasOwnProperty('id'));