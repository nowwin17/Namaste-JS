console.log("start");
var array = [5,9,12,19,62,23,24,31,44,49];
function isEven(n) {
   return (n % 2) === 0  //to get even numbers
}

function isOdd(n) {
   return (n % 2) === 1  //to get odd numbers
}

function double(x){
   return x+x;
}
/**Array Handling using map function (It is used to transformed given array to any desired output) */

//console.log(array.map(double));
/**OR */
const output = array.map((x)=>{
   return (x+x);
});
console.log("double array using map")
console.log(output);

/**Array Handling using filter function (It is used to filter given array) */
console.log(array.filter(isEven));

/**Array Handling using reduce function  */
const max = array.reduce(function(acc,curr){
   console.log("accumelator-->"+acc);//accumulated value of desired output, intially its 0
   console.log("current value-->"+curr);//current value of given array
                  if(curr>acc){ //check whether cuur is greater than acc 
                     acc=curr; //then assign curr to acc 
                  }
                  return acc;
               },0);//initial value of acc is 0
console.log(max);

/**sum of even numbers */
function sumOfEvenNumbers(arr) {
   return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
 }
 
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 console.log(sumOfEvenNumbers(numbers)); // Output: 20
 

/***Frequency of numbers */
const arr = [1, 2, 2, 3, 3, 3, -2];
const frequency = arr.reduce((obj, val) => {
  obj[val] = (obj[val] || 0) + 1;
console.log(obj);
  return obj;
}, {});

console.log(frequency);

/***FLaten Infinite levels of array */
var nestedArr = [11, [22, 33,[8,9]], [44, 55], [66, 77], 88, 99];
var flatArr = arr.flat(Infinity);
console.log(flatArr); // [11, 22, 33, 8, 9, 44, 55, 66, 77, 88, 99]
