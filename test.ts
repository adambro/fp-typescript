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
    return val;
    // no undefined in NumOrStr
}

