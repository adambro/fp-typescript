let num = 1;
let str = 'test'
let bool = false;
let numArr = [1,2,3,4];

num = 1;
numArr.push(num);

function testfn(num: number):never {
    throw new Error();
}

class User {
    private _name: string;
    constructor(newName: string) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    getHelloName(): string {
        return 'hello '+ this.name;
    }
}

let user = new User('Alojzy');
console.log(user.getHelloName);
