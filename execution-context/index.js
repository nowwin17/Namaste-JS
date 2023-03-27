console.log("start");
var n =2; 
//on this line it creates a memory for n in GEC
//assign value to undefined 
function square(num){
    var ans = num * num;
    return ans;
}
// assign memory to function and also assign defination to its value.
console.log(square); //It prints its defination
var square2 = square(n);
//function invoke create another execution context for a function in call stack.
// once functions execution end that local context execution destroy and return to main.

var square4 = square(4);
//again the repeat process and return to main.
console.log("End");
// destroy global execution and now call stack empty.