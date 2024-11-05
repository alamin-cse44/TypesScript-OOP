{
    //

    class Person {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }

    class Student extends Person {
        studentId: number;
        constructor(name: string, age: number, address: string,studentId: number) {
            super(name, age, address);
            this.studentId = studentId;
        }
    }

    // const student = new Student("student1", 22, "janina", 222);
    // student.address = "new address";
    // console.log(student); 
    
    class Teacher extends Person{
        profession: string;
        constructor(name: string, age: number, address: string, profession: string){
            super(name, age, address);
            this.profession = profession;
        }

        takingClass(numberOfClass: number): void {
            console.log(`The teacher has ${numberOfClass}`)
        }
    }

    const teacher = new Teacher("Mr. teacher", 45, "Dhaka", "Teacher");
    teacher.takingClass(1)
    //

}