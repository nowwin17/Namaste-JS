// Async/await
async function getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data received!');
      }, 10000);
    });
  }
  var x=12;

  async function printData() {
    console.log(x)
    const data = await getData();
    console.log(data);
  }
  console.log(x)
  
  printData();

  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function countDown(num) {
    console.log(num);
    if (num > 1) {
      countDown(num - 1);
    }
  }
  
 countDown(5); // Output: 5 4 3 2 1
  

  //console.log(factorial(5)); // output: 120
