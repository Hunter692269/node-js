const arr = [0,2,0,5]
const myHeros = new Array(1,2,3,4)
// console.log(myHeros);
myHeros.push(5);
// console.log(myHeros);
myHeros.pop()
// console.log(myHeros);
myHeros.unshift(9)
// console.log(myHeros);
myHeros.shift()
// console.log(myHeros);
// console.log(myHeros.includes(9));
const newArr = myHeros.join()//converts array to string
// console.log(typeof newArr);

console.log("A ", myHeros);
const n1 = myHeros.slice(1,3);
console.log(n1);
console.log("B ", myHeros);
const n2 = myHeros.splice(1,3);
console.log(n2);
console.log("C ",myHeros);