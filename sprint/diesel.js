const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]'

console.log(calculateFines(carData))

function calculateFines(data) {

    if (!data) return JSON.stringify({totalFines: 0, cars: []})
    const obj = JSON.parse(data);

    let result = {
        totalFines: 0,
        cars: []
    }

    for (let car of obj) {
        if (car[3] < 2000) {
            result.totalFines += 20;
            result.cars.push({ "reg": car[2], "year": car[3], "fuel": car[4], "fine": 20 });
        } else if (car[4] === 'diesel' && car[3] < 2015) {
            result.totalFines += 10;
            result.cars.push({ "reg": car[2], "year": car[3], "fuel": car[4], "fine": 10 });
        }
    }

    return JSON.stringify(result)
    //return result;
}
