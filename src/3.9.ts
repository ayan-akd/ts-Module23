{
  //abstraction intefeace or abstract class

  // interface

  interface Vehicle1 {
    startEngine(carName: string): void;
    stopEngine(carName: string): void;
    move(carName: string): void;
  }

  class Car implements Vehicle1 {
    startEngine(carName: string): void {
      console.log(`I am starting the ${carName} car engine`);
    }
    stopEngine(carName: string): void {
      console.log(`I am stopping the ${carName} car engine`);
    }
    move(carName: string): void {
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

  //abstract car

  interface Vehicle2 {
    startEngine(carName: string): void;
    stopEngine(carName: string): void;
    move(carName: string): void;
  }

  abstract class Car2 implements Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
  }

  const myToyotaCar = new ToyotaCar();
  myToyotaCar.startEngine();
  myToyotaCar.stopEngine();
  myToyotaCar.move();
}
