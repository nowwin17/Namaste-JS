console.log("start");
var array = [5,9,12,19,23,24,31,44,49,62];

function isEven(n) {
    return (n % 2) === 0  //to get even numbers
 }
 
 function isOdd(n) {
    return (n % 2) === 1  //to get odd numbers
 }

 console.log(array.filter(isEven));
