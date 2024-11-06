{
  //OOP inheritance

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Ayan", 25, "Rangpur");
  student1.getSleep(8);

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will teach ${numOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("Sir", 25, "Rangpur", "VP");
  teacher1.getSleep(8);
  teacher1.takeClass(10);
}
