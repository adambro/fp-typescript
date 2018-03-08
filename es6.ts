//console.log(a);
//console.log(b);

var a = 5;
let b = 6;
const c = {
    p1: 1
}

c.p1 = 6

var test = function (arg) {
    return arg*5
}
var test2 = (arg: any) => arg*5

var obj = {
    a: "test",
    fn1: function() {
        console.log("from fn1: ", this);
        setTimeout(function() {
            console.log("from timeout1", this)
        })
    },
    fn2: function() {
        console.log("from fn2: ", this);
        setTimeout(()=> {
            console.log("from timeout2", this)
        })
    } 
}
obj.fn1();
obj.fn2();

function myFn(p1, ...restParams) {
    console.log(restParams);
}

myFn(1,2,3,4,5,6,"test");
let arr = [1,2,3];
let newArray = [...arr, ...arr]
console.log(...arr)

let testobj = {
    a: 1,
    b: 2
};

let testobj2 = { ...testobj}
var str1 = "Hello"
var str2 = "World"
console.log(str1 + " " 
+ str2);
console.log(`${str1} 

${str2}`)