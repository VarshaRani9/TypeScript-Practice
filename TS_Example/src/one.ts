// TYPES IN TS
var a:number = 10;// // Explicit type
var b:number;
b = 20;
// // b = true; // error
var c = 30;// // Implicit type / Type inference
var d:string = 'Amit';
var e = 'shyam';
var t:boolean
// // console.log(t); // t is used before being assigned
var t2:bigint;
// // var g1 = 22222n; // ?????????????????
// // g1 = 'varsha'; // error
var arr = [10,20,30]
var arr2 = [10,20,30,"varsha",true]
var arr3:number[] = [100,200,300]
// // var arr3:number[] = [100,200,300,"varsha",true]; // Error
var obj = {id:101,name:"varsha"}
// // obj.salary = 10001
var obj2 = {id:101,name:"varsha"}
console.log(obj,obj2);


// CUSTOM TYPES
var v1:any;
v1 = 8;
v1 = "hii"
v1 = true;
var v2;
v2 = 7;
v2 = "hello"
v2 = false;
var v3:undefined = undefined;
var v4:null = null
type mytype = {id:number, name:string}
var v5:mytype = {id:1001,name:"varsha"}
var v6:mytype = {id:101,name:"rani"}
function show1(t:mytype){
    console.log(t);
    return t;  
}
show1({id:1001, name:'Tim'})


// TUPLES
var record:[number, string, boolean] = [1001, 'Ram', true];
console.log(record[0], record[1], record[2]);
console.log(record);
var obj3 : {id:number, name:string, att:boolean} = {id:1001, name:'Ram', att:true}

var r:number|string|boolean = true;
r = 1000
r = 'abcd'
// // r = [10, 20]


// ENUM - to represent group of constants
// // TS enum can store Number or String
enum Days{
    SUNDAY=1,MONDAY
}
var currentDay = Days.MONDAY;
console.log(currentDay);

var currentDay = Days.MONDAY;
if(10>2)currentDay=Days.SUNDAY
console.log(typeof currentDay, currentDay);
switch(currentDay){
    case Days.SUNDAY: console.log('Holiday');break;
    case Days.MONDAY: console.log('work');break;
    default : console.log('Invalid');    
}

function getValue(){
    return 12
}
enum Day{
    SUNDAY=1, MONDAY, TUESDAY=SUNDAY+MONDAY, WEDNESDAY=getValue()
}


// NEVER TYPE
// function printError(msg):never{
//     throw new Error(msg)
// }

// DESTRUCTURE
var arr:number[] = [10,20,30,40]
var[x,y] = arr;
console.log(x," ",y);
var[a,,,b] = arr;
console.log(a," ",b);

function getElements([x,y]:number[]){
    console.log(x," ",y);
}
getElements(arr)
const obj5 = {id:1001, name:'Ram', att:true}
// const {id,att} = obj5;
const {id,att}:{id:number,att:boolean} = obj5;
console.log(id," ",att);


// UNKNOWN VS ANY
var w : any;
w = 10;
w = "varsha"
w = [10,20]
w = {id:7}
w = true;
var k:boolean = w; // // Assigned

var w1 : unknown;
w1 = 10;
w1 = "varsha"
w1 = [10,20]
w1 = {id:7}
w1 = true;
// var k1:boolean = w1; // // Error - Type 'unknown' is not assignable to type 'boolean'

var w2:unknown;
w3 = w2;

var w3:any;
w3 = w1