function convert2DArrayToObjectArray(arr) {
    return arr.map(data => {
        let result = {}
        result[data[0]] = data[1]
        return result
    })
}

function convertArrayOfObjectsToStrings(arr) {
    return arr.map(obj => {
        return Object.entries(obj)
            .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
            .join(", ");
    });
}

function concatenateStrings(arr, num) {
    return arr.map(str => str.length <= num ? str : str.slice(0, num) + "...")
}

//tests
const data = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];

console.log(convert2DArrayToObjectArray(data))

const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
]

console.log(convertArrayOfObjectsToStrings(objects))

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

console.log(concatenateStrings(strings, 5))