// Immediately Invoked Function Expressions (IIFE)
// due to the polution of global scoop if we want to run a function Immediately free from cluter we use iife

//normal definition and call
function fun1(){
    console.log(`DB CONNECTED`);
}
fun1();

(function fun2(){
    console.log(`DB CONNECTED`); // format ()()
})();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`); // if we do not put a semicolon on the above function it does not stop execution so it gives an error for next code
} )("Rushi");
