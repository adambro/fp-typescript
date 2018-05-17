let a1 = false;
let b1 = 5;
let c1 = 'test';
let d1 = null;
let e1: {a: number, b: number} = {a:1, b: 2};
let f1 = 'any string';

let input = document.getElementById('input')
b1 = null;
let arr: any[];
interface Country {
    name: string;
    capitol: string;
}
interface Address {
    city: string;
    code: number | null;
    fn(number: number): void;
    country?: Country;
}

let addr: Address = {
    city: 'Gliwice',
    code: null,
    fn(test) {
        console.log(5)
    },

    country: {
        name: 'Poland',
        capitol: 'Gniezno'
    }
};
addr.code = null;

type NumberOrString = number | string | null;
let numStr: NumberOrString = null;

function myFn(val1: Country): string {
    return val1.capitol;
}

interface DateMap {
    [month: string]: Date;
}
const dateMapObj: DateMap = {
    january: new Date(),
    feb: new Date(),
    mar: new Date(),
    apr: new Date()
}

let pl = {
    name: 'Poland',
    capitol: 'Gniezno'
};

myFn(pl)