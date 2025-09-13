// =============================
// Step 1: Define the interface
// =============================
// An interface in TypeScript is like a "contract".
// It ensures that any class implementing it MUST have the listed properties and methods.
interface Vehicle {
  make: string;          // Brand of the vehicle (e.g., Toyota, BMW)
  model: string;         // Specific model (e.g., Corolla, X5)
  year: number;          // Manufacturing year (e.g., 2021)
  start(): void;         // A method that starts the engine (no return value = void)
}

// =============================
// Step 2: Create a class
// =============================
// The Car class implements the Vehicle interface.
// That means Car MUST have make, model, year, and a start() method.
class Car implements Vehicle {
  make: string;   // Declare property for car's brand
  model: string;  // Declare property for car's model
  year: number;   // Declare property for car's manufacturing year

  // -----------------------------
  // Constructor method
  // -----------------------------
  // Runs automatically when a new Car is created.
  // It initializes the properties (make, model, year).
  constructor(make: string, model: string, year: number) {
    this.make = make;    // Assign the input value "make" to the Car's make
    this.model = model;  // Assign the input value "model" to the Car's model
    this.year = year;    // Assign the input value "year" to the Car's year
  }

  // -----------------------------
  // Start method
  // -----------------------------
  // Every Car must have a start method (because of the Vehicle interface).
  // This logs a message to the console when the car starts.
  start(): void {
    console.log("Car engine started");
  }
}

// =============================
// Step 3: Create an instance of Car
// =============================
// "new Car(...)" calls the constructor and makes a brand new Car object.
const myCar = new Car("Toyota", "Corolla", 2021);

// =============================
// Step 4: Access properties
// =============================
// We can access the properties (make, model, year) of the car instance
// just like we would with any object in JavaScript.
console.log(myCar.make);   // Expected output: Toyota
console.log(myCar.model);  // Expected output: Corolla
console.log(myCar.year);   // Expected output: 2021

// =============================
// Step 5: Call the start method
// =============================
// This will execute the method we defined above and print a message to the console.
myCar.start();  // Expected output: Car engine started
