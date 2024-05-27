// filter // since foreach does not return values filter is used
// map // can be used to do operations on the items
// can create chains of map,filter and the 1st returns array to second and so on

// reduce

const arr = [1,2,3,4,5,6]

// const sum = arr.reduce(function(acc,val){
    // console.log(`acc=${acc} val=${val}`);
//     return acc+val
// },0)//we specify the value of the accumulator acc

const sum = arr.reduce((acc,val)=> acc+val,0)

// console.log(sum);

const cart =[
    {
        name:"js course",
        price:1000
    },
    {
        name:"py course",
        price:10900
    },
    {
        name:"ds course",
        price:7000
    },
    {
        name:"md course",
        price:3000
    },
]

const price = cart.reduce((acc,item)=> acc+item.price,0)
console.log(price);