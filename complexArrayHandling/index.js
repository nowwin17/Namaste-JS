/** The function should filter the array to only include people who are at least 18 years old, 
 * then create a new array of objects with the same "name" property but with 
 * an additional property "status" that indicates whether the person is an adult or a minor. */

function filterAndMapPeople(people) {
   const filteredPeople = people.filter(person => person.age >= 18);
   
   const mappedPeople = filteredPeople.map(person => {
     const status = person.age >= 18 ? 'adult' : 'minor';
     return { name: person.name, status: status };
   });
   
   return mappedPeople;
 }
 
 const people = [
   { name: 'Alice', age: 25 },
   { name: 'Bob', age: 17 },
   { name: 'Charlie', age: 21 },
   { name: 'Dave', age: 16 }
 ];
 
 const filteredAndMappedPeople = filterAndMapPeople(people);
 console.log(filteredAndMappedPeople);

/**Sort array of object */ 
 function sortByPrice(products) {
   return products.sort((a, b) => a.price - b.price);
 }
 
 const products = [  { name: 'Product A', price: 15 },  { name: 'Product B', price: 10 },  { name: 'Product C', price: 20 },  { name: 'Product D', price: 5 }];
 
 console.log(sortByPrice(products)); // Output: [{ name: 'Product D', price: 5 }, { name: 'Product B', price: 10 }, { name: 'Product A', price: 15 }, { name: 'Product C', price: 20 }]
 