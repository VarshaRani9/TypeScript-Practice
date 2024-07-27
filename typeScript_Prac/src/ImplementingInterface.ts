interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// You can create a class which implements this interface.
class Employee implements Person {
    name: string;
    age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Varsha", 22);
console.log(e);
