console.log("start");
var y = 1;
if(function f(){}){
    console.log("inside")
y += typeof f;
}
console.log(y);