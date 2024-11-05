{
  //

  class Person {
    getSleep() {
      console.log("General people sleep for 8 hours");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("Students sleep for 7 hours");
    }
  }

  class Teacher extends Person {
    getSleep() {
      console.log("Teachers sleep for 9 hours");
    }
  }

  const getSleepingHours = (param: Person): void => {
    param.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const teacher = new Teacher();
  getSleepingHours(person);
  getSleepingHours(student);

  // second example

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  const getAreaCalculated = (param: Shape): number => {
    return param.getArea();
  }

  const circle = new Circle(5);
  const resultCircle = getAreaCalculated(circle);
  console.log(resultCircle)

  const rectangle = new Rectangle(4, 6);
  const resultRectangle = getAreaCalculated(rectangle);
  console.log(resultRectangle)



  //
}
