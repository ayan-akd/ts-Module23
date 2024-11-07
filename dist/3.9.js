"use strict";
{
    class Car {
        startEngine(carName) {
            console.log(`I am starting the ${carName} car engine`);
        }
        stopEngine(carName) {
            console.log(`I am stopping the ${carName} car engine`);
        }
        move(carName) {
            console.log(`I am moving the ${carName} car`);
        }
        test() {
            console.log("Testing");
        }
    }
    const toyotaCar = new Car();
    toyotaCar.startEngine("Toyota");
    toyotaCar.stopEngine("Toyota");
    toyotaCar.move("Toyota");
    class Car2 {
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`I am starting the car engine`);
        }
        stopEngine() {
            console.log(`I am stopping the car engine`);
        }
        move() {
            console.log(`I am moving the car`);
        }
    }
    const myToyotaCar = new ToyotaCar();
    myToyotaCar.startEngine();
    myToyotaCar.stopEngine();
    myToyotaCar.move();
}
