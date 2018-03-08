export class ElementList<T> {
    constructor(private _elements: T[]){}
    put(el: T) {
        this._elements.push(el);
    }
    get elements(): T[] {
        return this._elements;
    }
}

let numberList = new ElementList<number>([]);
let numberArr = numberList.elements;

function get<T>():T[] {
    return []
}

function overloadedFunction(num, str: string)
function overloadedFunction(num: number)
function overloadedFunction(num: number, str: string)
function overloadedFunction(num: number| boolean, str?: string){

}