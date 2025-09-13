// =============================
// Step 2: Create a class
// =============================
// The Car class implements the Vehicle interface.
// That means Car MUST have make, model, year, and a start() method.
var Car = /** @class */ (function () {
    // -----------------------------
    // Constructor method
    // -----------------------------
    // Runs automatically when a new Car is created.
    // It initializes the properties (make, model, year).
    function Car(make, model, year) {
        this.make = make; // Assign the input value "make" to the Car's make
        this.model = model; // Assign the input value "model" to the Car's model
        this.year = year; // Assign the input value "year" to the Car's year
    }
    // -----------------------------
    // Start method
    // -----------------------------
    // Every Car must have a start method (because of the Vehicle interface).
    // This logs a message to the console when the car starts.
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// =============================
// Step 3: Create an instance of Car
// =============================
// "new Car(...)" calls the constructor and makes a brand new Car object.
var myCar = new Car("Toyota", "Corolla", 2021);
// =============================
// Step 4: Access properties
// =============================
// We can access the properties (make, model, year) of the car instance
// just like we would with any object in JavaScript.
console.log(myCar.make); // Expected output: Toyota
console.log(myCar.model); // Expected output: Corolla
console.log(myCar.year); // Expected output: 2021
// =============================
// Step 5: Call the start method
// =============================
// This will execute the method we defined above and print a message to the console.
myCar.start(); // Expected output: Car engine started
