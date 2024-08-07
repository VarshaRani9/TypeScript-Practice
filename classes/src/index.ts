class DateClass {
    private timeZone : string
    constructor(timeZone:string){
        this.timeZone = timeZone
    }
    getTime(){
        var d = new Date()
        return d.getTime()
    }

    getMonth(){
        var d = new Date()
        return d.getMonth()
    }

    getCountry(){
        var d = new Date()
        return this.timeZone
    }

    expensiveOperation(){
        const startTime = new Date().getTime()
        let ctr = 0;
        for (let index = 0; index <100000 ; index++) {
            ctr++;
        }
        console.log(ctr);
        const endTime = new Date().getTime()
        console.log("Time taken : "+ (endTime-startTime)+" ms");
        
    }
}

const dateObj = new DateClass("IND")

const time = dateObj.getTime()
console.log(time);

const month = dateObj.getMonth()
console.log(month);

const country = dateObj.getCountry()
console.log(country);

dateObj.expensiveOperation()