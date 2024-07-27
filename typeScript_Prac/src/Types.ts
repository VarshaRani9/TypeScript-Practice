type Users = {
    firstName: string,
    age: number
}
function isLegall (user : Users) {
        if(user.age>18) {
            return true
        }
        else{
            return false
        }
}
const ress = isLegall({
    firstName: "Varsha",
    age: 22
})
console.log(ress);