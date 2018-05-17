var input = document.querySelector('#input1');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output');

const c = {
    prop: 1
};

let myArr = [1, 2, 3, 4]
let [v1, v2, ...v3] = myArr
let newArr = [...myArr, 5, 6, 7]

let myObj = { a: 1, b: 2};
let newObj = {...myObj, b: 3}

let {a, b} = myObj;

function test() {
    this.myVar = 5;
    let fn2 = function (a, b, c = 5) {
        console.log(c)
    }
    this.runFn = function () {
        fn2(1, 2);
    }
}
btn.addEventListener('click', function () {

    output.textContent = `zmienna1: ${v1}, 
    
    
    zmienna2: ${v2}`;
})
