import { User } from "./User";
import { Address } from "./models/Address";
import { Cart } from "./Cart";

let num = 1;
let str = 'test'
let bool = false;
let numArr = [1,2,3,4];

num = 1;
numArr.push(num);

function testfn(num: number):never {
    throw new Error();
}

let user:User = new User('Alojzy');
console.log(user.getHelloName());


let userAddress : Address = {
    city: 'Radzionków',
    street: 'Hasiok 10'
}
export type NumOrString = number | string
let numOrString: NumOrString;

interface Person {
    name: string;
    age: number;
}

interface SystemUser {
    login: string;
}

type CustomUser = Person & SystemUser;

numOrString = 'asdsa'

interface SuperUser extends Person, SystemUser {
    address: Address
}

function test2(value: NumOrString) {
    if (typeof value === 'string') {
        
    } else {
    }
}

function test3(val: User | Cart) {
    if( val instanceof User) {
    } else {
    }
}

function test4(val: Address | Person) {
    if ('city' in val) {
    } else {
    }
}

function isPerson (val: Person | SystemUser): val is Person{
    return (<Person>val).name !== undefined;
}

