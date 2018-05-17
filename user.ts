export interface BaseUser {
    logFullName(): void;
    getName(): string;

}

abstract class SuperUser {
    setAdminRights(isAdmin: true): void {
        console.log('test');
    };
}
abstract class SuperUser2 {
    setAdminRights2(isAdmin: true): void {
        console.log('test');
    };
}

export class User extends SuperUser{

    names: string[] = [];
    constructor(private firstName: string = 'Adam', private secondName: string){
        super();
    }

    getName(): string {
        return this.firstName;
    }


    logFullName(): void {
        this.names.push('')
        console.log(`${this.firstName} ${this.secondName}`);
    }

    get fullName() {
        return `${this.firstName} ${this.secondName}`
    }

    set fullName(fullName: string) {
        let names = fullName.split(' ');
        this.firstName = names[0];
        this.secondName = names[1];
    }
}
let myUser: User = new User('Alojzy', 'Jeż');
myUser.logFullName();
myUser.fullName = 'Adam Miauczyński';
myUser.logFullName();