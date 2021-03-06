let http = require("http");

interface IBook {
    title:string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

const book1: IBook = {
    title: "Jernhestens Ibs Kæmpe Rejsning",
    author: "Ib ibbesen",
    published: new Date(),
    //pages: 3025,
}

function logBook(book: IBook) {
    console.log(book);
}

logBook(book1);

class Book implements IBook {
    //private _title : string;
    #title: string
    #author: string
    #published: Date
    #pages: number
    constructor(title: string,
        author: string,
        published: Date,
        pages: number) {
        this.#title = title
        this.#author = author
        this.#published = published
        this.#pages = pages
    }
    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }
    get author(): string { return this.#author }
    set author(author: string) { this.#author = author }
    get published(): Date { return this.#published }
    set published(published: Date) { this.#published = published }
    get pages(): number { return this.#pages }
    set pages(pages: number) { this.#pages }
    toString(): string { return this.title +" "+ this.author +" "+ this.published +" "+ this.pages }
}

let b1 = new Book ("Bagklogskabens ulidelige kloge bagklogskab", "Tibetaneren ub", new Date(), 256);

console.log(b1.toString())


/*

Ducktyping:
Duck typing allows an object to be passed in to a method that expects a certain type even if it doesn’t inherit from that type. All it has to do is support the methods and properties of the expected type in use by the method.

I emphasize that last phrase for a reason. Suppose we have a method that takes in a duck instance, and another method that takes in a rabbit instance. In a dynamically typed language that supports duck typing, I can pass in my object to the first method as long as my object supports the methods and properties of duck in use by that method. Likewise, I can pass my object into the second method as long as it supports the methods and properties of rabbit called by the second method. Is my object a duck or is it a rabbit? Like the above image, it’s neither and it’s both.

In many (if not most) dynamic languages, my object does not have to support all methods and properties of duck to be passed into a method that expects a duck. Same goes for a method that expects a rabbit. It only needs to support the methods and properties of the expected type that are actually called by the method.
*/