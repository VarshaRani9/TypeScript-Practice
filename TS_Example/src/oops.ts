class Employee{
    // private id:number;
    // private name:string;
    // constructor(id:number, name:string){
    //     this.id = id;
    //     this.name = name;
    // }

    // shorthand constructor
    constructor(private id:number, private name:string){
    }
    show():void{
        console.log(`Id : ${this.id} and Name : ${this.name}`);
        
    }
}
var tom:Employee = new Employee(10,"xyz")
tom.show()