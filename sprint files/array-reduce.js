const getTotalFromShoppingBasket = arr => arr.reduce((acc, item) => acc + item.price, 0);

const getAverageAge = arr => arr.length === 0 ? 0 : arr.reduce((total, person) => total + person.age, 0) / arr.length;


const concatenateObjects = arr => arr.reduce((acc, item) => {
    if (!acc[item.key]) {
        acc[item.key] = [];
    }
    acc[item.key].push(item.value);
    return acc;
}, {});

//tests
const products = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 30 }
]

console.log(getTotalFromShoppingBasket(products))

// should return 30
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]

console.log(getAverageAge(people))

const objects = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 4 },
  { key: "b", value: 5 },
]

console.log(concatenateObjects(objects))
