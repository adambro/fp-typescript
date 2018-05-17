Typescript
====

## Interfaces

Interfaces are gone in resulting JS code.
Defining an interface with the same name will merge with exisitng one.

## Union types

```
type NumOrStr = number | string

let a: NumOrStr = '2';

function double(val: NumOrStr): NumOrStr {
    if (typeof val === 'string') {
        return val + val;
        // VSCode suggests only String methods here!
    }
    if (typeof val === 'number') {
        return val * 2;
        // VSCode suggests only Number methods here!
    }
    // no undefined!
}
```

## Generic types

```
class UserList<T extends Baseuser>
```

## Libs

    npm i --save-dev @types/jquery
