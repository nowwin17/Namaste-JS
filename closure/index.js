/**Data Privacy */
function createCounter() {
   let count = 0;
   return function increment() {
     count++;
     console.log(count);
   };
 }
 
 const counter = createCounter();
 counter(); // output: 1
 counter(); // output: 2
/**In this example, createCounter returns a function that has access to the count variable defined in its outer scope. 
 * Since count is not accessible from outside the increment function, 
 * it is kept private and cannot be modified by external sources. */ 

/**Function Factories or Currying */
function createAdder(num) {
   return function adder(value) {
     return num + value;
   };
 }
 
 const add5 = createAdder(5);
 console.log(add5(3)); // output: 8
 console.log(add5(7)); // output: 12
/**In this example, createAdder returns a function that adds a given value to a predefined number.By calling 
 * createAdder with different numbers, we can create different versions of the adder function that are tailored to specific needs.*/ 

/**Memory Effeciency */
function multiplyBy(num) {
   return function(number) {
     return number * num;
   };
 }
 
 const multiplyBy2 = multiplyBy(2);
 console.log(multiplyBy2(3)); // output: 6
 console.log(multiplyBy2(5)); // output: 10
 
 const multiplyBy10 = multiplyBy(10);
 console.log(multiplyBy10(3)); // output: 30
 console.log(multiplyBy10(5)); // output: 50

/**
 * In this example, multiplyBy returns a function that multiplies a given number by a predefined value. 
 * By reusing the multiplyBy function with different numbers, we can create multiple versions of the inner function 
 * that share the same code and memory.
 */

/**Callbacks */
function fetchData(url, callback) {
   fetch(url)
     .then(response => response.json())
     .then(data => callback(data))
     .catch(error => console.log(error));
 }
 
 fetchData('https://api.example.com/data', function(data) {
   console.log(data);
 });
/**In this example, fetchData is a function that fetches data from a remote API and then calls a callback function with 
 * the returned data. By using a closure to maintain the state of the callback function, we can pass it as an argument 
 * to fetchData and have it execute with the fetched data when the API call is complete.*/ 