
class FuelPump {
    constructor(fuel, distance) {
        this.fuel = fuel;
        this.distance = distance;
    }
}

function circularTour(fuelPump, n) {
    let start = 0;
    let end = 1;
    let extraFuel = fuelPump[start].fuel - fuelPump[start].distance;

    // if extraFuel becomes -ve, update the starting point
    while (start !== end || extraFuel < 0) {
        // if extraFuel becomes -ve, update the starting point
        while (start !== end && extraFuel < 0) {
            // making extraFuel zero, update start
            extraFuel -= fuelPump[start].fuel - fuelPump[start].distance;
            start = (start + 1) % n;
            // if 0 being considered as starting point again, return -1 as no starting point is present to complete the loop.
            if (start === 0)
                return -1;
        }
        // add fuel to current tour
        extraFuel += fuelPump[end].fuel - fuelPump[end].distance;
        end = (end + 1) % n;
    }
    return start;
} // O(n)

const fuelPumps = [
    new FuelPump(7, 6),
    new FuelPump(8, 7),
    new FuelPump(5, 8),
    new FuelPump(11, 9),
    new FuelPump(7, 7),
    new FuelPump(6, 5)
]

console.log('starting point:', circularTour(fuelPumps, fuelPumps.length));