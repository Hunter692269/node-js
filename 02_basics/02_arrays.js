const marvel = ["ironman" , "spiderman", "black widow"]
const dc = ["superman", "wonderwoman", "batman"]
// marvel.push(dc)
// console.log(marvel);

const allh = marvel.concat(dc);//only for 2
// console.log(allh); 

const newHeros = ["buck","greenlantern"]

const allHeros = [...marvel,...dc,...newHeros]// can be used for multiple
// console.log(allHeros);

const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableArray = newArr.flat(Infinity);
// console.log(usableArray);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({name: "hello"})); // u have to specify to create an array of elements or names so as its confused it returns empty array

let n1 = 1
let n2=2
let n3=3
console.log(Array.of(n1,n2,n3));