{
  //instanceof guard

  class Animal {
    constructor(
      public animalName: string,
      public animalSpecies: string,
      public animalSound: string
    ) {}

    makeSound() {
      console.log(`The ${this.animalName} makes ${this.animalSound} sound.`);
    }
  }

  class Dog extends Animal {
    constructor(
      public animalName: string,
      public animalSpecies: string,
      public animalSound: string
    ) {
      super(animalName, animalSpecies, animalSound);
    }

    makeBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(
      public animalName: string,
      public animalSpecies: string,
      public animalSound: string
    ) {
      super(animalName, animalSpecies, animalSound);
    }

    makeMeow() {
      console.log("I am Meowing");
    }
  }

  // smart way to handle, we can use function

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }

    const dog = new Dog("Local Dog", "Dog", "Barking");
    const cat = new Cat("Local Cat", "Cat", "Meowing");
  };
}
