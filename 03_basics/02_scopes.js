var c=200

if(true){
    let a =10
    const b =20
    var c =30
}
// console.log(a);//does not run gives error
// console.log(b);//does not run
// console.log(c);// this works


function one(){
    const username = "hello"

    function two(){
        const website = "yt"
        // console.log(username);
    }
    // console.log(website);
    two()
    // console.log(website);
}
one()



////////////////
console.log(addone(5))
function addone(num){  // can access before definition explanation in further files
    return num+1
}

// addTwo(5)
const addTwo = function(num){
    return num+2 // cannot acces before coz function is bind in variable
}
