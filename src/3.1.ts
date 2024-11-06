{
  //OOP - Class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //parameter properties

    constructor(
      public animalName: string,
      public animalSpecies: string,
      public animalSound: string
    ) {
      // this.name = animalName;
      // this.species = animalSpecies;
      // this.sound = animalSound;
    }

    makeSound() {
      console.log(`The ${this.animalName} makes ${this.animalSound} sound.`);
    }
  }

  const dog = new Animal("Local Dog", "Dog", "Vou Vou");
  const cat = new Animal("Local Cat", "Cat", "Meow Meow");
  const bird = new Animal("Local Bird", "Bird", "Tweet Tweet");
  dog.makeSound();
  cat.makeSound();
  bird.makeSound();
}
