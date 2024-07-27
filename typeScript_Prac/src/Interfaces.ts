// To use same parameter at somewhere else we need to re-define that
function isLegal1 (user : {firstName: string,
    lastName: string,
    age: number}) {
        if(user.age>18) {
            return true
        }
        else{
            return false
        }
}
function greet1 (user : {firstName: string,
    lastName: string,
    age: number}) {
        return "Hello"+user.firstName;
}
const res = isLegal1({
    firstName: "Varsha",
    lastName: "Rani",
    age: 22
})
console.log(res);
const res2 = greet1({
    firstName: "Varsha",
    lastName: "Rani",
    age: 22
})
console.log(res2);


// By using interface we need to define only once
interface User {
    firstName: string,
    lastName: string,
    age: number
    email?: string // optional
}
function isLegal2 (user : User) {
        if(user.age>18) {
            return true
        }
        else{
            return false
        }
}
function greet2 (user: User) {
        return "Hello"+user.firstName;
}
const res3 = isLegal2({
    firstName: "Varsha",
    lastName: "Rani",
    age: 22
})
console.log(res3);
const res4 = greet2({
    firstName: "Varsha",
    lastName: "Rani",
    age: 22,
    email: "varsha@123"
})
console.log(res4);
