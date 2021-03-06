//a)
function reverseArr<T>(arg: T[]): T[] {
    return arg.reverse();
}


console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"])); 

//b)

class DataHolder<T> {
    val: T;
    constructor(val: T) { this.val = val };
    getValue() { return this.val };
    setValue(val: T) { this.val = val };
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

//d.setValue(456);
//console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());

//d2.setValue("pop");
//console.log(d2.getValue());

//c

class DataHolderTwo<T> {
    #val: T
    constructor(val: T) { this.#val = val };
    get Value(): T { return this.#val };
    set Value(val: T) { this.#val = val };

    toString(): T { return this.#val }
}

let d3 = new DataHolderTwo<string>("I like");
console.log(d3.toString());
d3.Value = "Pie";
console.log(d3.toString());