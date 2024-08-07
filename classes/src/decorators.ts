import { measure, once } from "helpful-decorators"

class DemoClass {
    private timeZone : string

    constructor(timeZone:string){
        this.timeZone = timeZone
    }

    // @ts-ignore
    @once
    getTime(){
        var d = new Date()
        console.log("inside getTime & it should run only once");
        
        return d.getTime()
    }

    // @ts-ignore
    @measure
    expensiveOperation(){
        let ctr = 0;
        for (let index = 0; index <100000 ; index++) {
            ctr++;
        }
        console.log("counter: "+ctr);        
    }
}

const demoObj = new DemoClass("IND")

const time = demoObj.getTime()
demoObj.getTime()
demoObj.getTime()
console.log(time);

demoObj.expensiveOperation()
