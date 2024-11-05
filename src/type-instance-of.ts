{
    //
    
    class Animal {
        name: string;
        sounds: string;
        constructor(name: string, sounds: string){
            this.name = name;
            this.sounds = sounds;
        }
        
        makeSound(): void {
            console.log(`${this.name} says: ${this.sounds}`);
        }
    }

    class Cat extends Animal {
        constructor(name: string, sounds: string) {
            super(name, sounds);
        }

        makeMeaw(): void {
            console.log(`${this.name} meows: ${this.sounds}`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, sounds: string) {
            super(name, sounds);
      }
      
      makeBarking(): void {
        console.log(`${this.name} barks: ${this.sounds}`);
      }
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const getSound = (animal : Animal) =>{
        if(isCat(animal)){
            animal.makeMeaw();
        }else if(isDog(animal)){
            animal.makeBarking();
        }else {
            animal.makeSound();
        }
    }

    const cat = new Cat("Whiskers", "Meow");
    getSound(cat);
    const dog = new Dog("Buddy", "Woof");
    getSound(dog);
    //
}