const coding = ["js","ruby","java","python"]

// coding.forEach( function(item){
//     console.log(item);
// } )

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item , index ,arr)=>{
//     console.log(item, index,arr);
// } )

const myCoding = [
    {
        lang:"javascript",
        fileName:"js"
    },
    {
        lang:"java",
        fileName:"java"
    },
    {
        lang:"python",
        fileName:"py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.fileName);
} )