import { User } from "./User";
import { Address } from "./models/Address";

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
