console.log(a);
console.log(b);

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
