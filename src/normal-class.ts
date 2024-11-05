{
  //

  // part 1: 
   class Start {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    public greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
   } 

   // Example usage:
  // const person = new Start("John Doe", 30);
  // person.greet();

  //part 2
  class End {
    
    constructor(public name: string,
      public age: number,
      public profession: string) {
      
    }

    public details(){
      console.log(`Name: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`);
    }
  }

  const result  = new End("rehan", 30, "bekar");
  console.log(result);

  //
}