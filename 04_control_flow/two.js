const obj = {
    js:'javascript',
    cpp:'c++',

}

for (const key in obj) {
    //console.log(obj[key]);
}

const arr=[1,2,3,4]
for (const key in arr) {
    //console.log(arr[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('Fr', "France")

// for (const key in map) { does not work for maps
//     console.log(key);
// }