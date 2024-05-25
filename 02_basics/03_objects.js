// object literals

const mySym = Symbol("key1") // general creation of a symbol

const us = {
    name: "harry",
    [mySym]: "key2", // creating a symbol in a array
    age: 3,
    email: "email@gmail.com",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(us.email);
// console.log(us["email"]);
// console.log(us[mySym]);

us.email = "email@chatgpt.com"
// Object.freeze(us)
us.email = "email@micro.com"
// console.log(us);


us.fungreetings= function(){
    console.log("in the greeting function");
}
us.fungreetings2= function(){
    console.log(`i am ${this.name}`);
}
console.log(us.fungreetings());
console.log(us.fungreetings2());