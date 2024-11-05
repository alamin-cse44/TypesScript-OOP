{
    //

    // interface 
    //idea 

    interface IVehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }
    //implementations
    class Car1 implements IVehicle {
        startEngine(): void {
            console.log('Car1 engine started');
        }
        stopEngine(): void {
            console.log('Car1 engine stopped');
        }
        move(): void {
            console.log('Car1 is moving');
        }
    } 

    const car1 = new Car1();
    car1.startEngine();

    //abstract class idea 
    abstract class Vehicle {

        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;

        abstractOwnership(){
            console.log("Abstract main class")
        }
    }

    class Car2 extends Vehicle {
        startEngine(): void {
            console.log('Car2 engine started');
        }
        stopEngine(): void {
            console.log('Car2 engine stopped');
        }
        move(): void {
            console.log('Car2 is moving');
        }
    }

    const car2 = new Car2();
    car2.abstractOwnership();

    //
}