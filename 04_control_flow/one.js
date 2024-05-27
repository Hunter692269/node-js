// for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
// }

// const greet = "Hello"

// for (const ch of greet) {
//     console.log(ch);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('Fr', "France")

console.log(map);

for (const [key,value] of map) {
    console.log(`Key - ${key} => value - ${value}`);
}

const obj = {
    game1:'NFS',
    game2:'High'
}
// for (const [key,value] of obj) { does not work on objects
//     console.log(`Key - ${key} => value - ${value}`);
// }