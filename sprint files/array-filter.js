function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function filterObjectsByNameLength(arr, num) {
    return arr.filter(obj => obj.name.length <= num)
}

function compoundFilter(arr) {
    return arr.filter(obj => obj.code.length > 5 && !obj.category.includes("special") && obj.price > 50 && obj.location !== "underground")
}



// tests
const objects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]

console.log(filterObjectsByNameLength(objects, 5));

const products = [
    {
        code: "ABC123",
        category: "electronics",
        price: 75,
        location: "Store",
    },
    {
        code: "XYZ456",
        category: "clothing",
        price: 30,
        location: "Mall",
    },
    {
        code: "PQR789",
        category: "special items",
        price: 60,
        location: "Underground",
    },
    {
        code: "LMN012",
        category: "accessories",
        price: 90,
        location: "Street",
    },
]

console.log(compoundFilter(products))