import { BaseUser } from "./models/BaseUser";

export class User implements BaseUser {
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