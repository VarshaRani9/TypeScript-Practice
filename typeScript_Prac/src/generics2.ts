function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1.toLowerCase());


function getFirstElementt<T>(arr: T[]) {
    return arr[0];
}
const el2 = getFirstElementt(["harkiratSingh", "ramanSingh"]);
console.log(el2.toLowerCase())

interface Userss {
    name: string
}
const ell = getFirstElementt<Userss>([{name:"varsha"}]);