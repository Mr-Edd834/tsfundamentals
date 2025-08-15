// Step 2: Implement the Car class that implements Vehicle
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Step 3: Create an instance of Car
var myCar = new Car("Toyota", "Corolla", 2022);
// Step 4: Call the start method
myCar.start(); // Output: "Car engine started"
