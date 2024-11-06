"use strict";
{
    //instanceof guard
    class Animal {
        constructor(animalName, animalSpecies, animalSound) {
            this.animalName = animalName;
            this.animalSpecies = animalSpecies;
            this.animalSound = animalSound;
        }
        makeSound() {
            console.log(`The ${this.animalName} makes ${this.animalSound} sound.`);
        }
    }
    class Dog extends Animal {
        constructor(animalName, animalSpecies, animalSound) {
            super(animalName, animalSpecies, animalSound);
            this.animalName = animalName;
            this.animalSpecies = animalSpecies;
            this.animalSound = animalSound;
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(animalName, animalSpecies, animalSound) {
            super(animalName, animalSpecies, animalSound);
            this.animalName = animalName;
            this.animalSpecies = animalSpecies;
            this.animalSound = animalSound;
        }
        makeMeow() {
            console.log("I am Meowing");
        }
    }
    // smart way to handle, we can use function
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
        const dog = new Dog("Local Dog", "Dog", "Barking");
        const cat = new Cat("Local Cat", "Cat", "Meowing");
    };
}
