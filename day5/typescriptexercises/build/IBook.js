"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title, _author, _published, _pages;
let http = require("http");
const book1 = {
    title: "Jernhestens Ibs Kæmpe Rejsning",
    author: "Ib ibbesen",
    published: new Date(),
    //pages: 3025,
};
function logBook(book) {
    console.log(book);
}
logBook(book1);
class Book {
    constructor(title, author, published, pages) {
        //private _title : string;
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _published, published);
        __classPrivateFieldSet(this, _pages, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    set author(author) { __classPrivateFieldSet(this, _author, author); }
    get published() { return __classPrivateFieldGet(this, _published); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set pages(pages) { __classPrivateFieldGet(this, _pages); }
    toString() { return this.title + " " + this.author + " " + this.published + " " + this.pages; }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
let b1 = new Book("Bagklogskabens ulidelige kloge bagklogskab", "Tibetaneren ub", new Date(), 256);
console.log(b1.toString());
/*

Ducktyping:
Duck typing allows an object to be passed in to a method that expects a certain type even if it doesn’t inherit from that type. All it has to do is support the methods and properties of the expected type in use by the method.

I emphasize that last phrase for a reason. Suppose we have a method that takes in a duck instance, and another method that takes in a rabbit instance. In a dynamically typed language that supports duck typing, I can pass in my object to the first method as long as my object supports the methods and properties of duck in use by that method. Likewise, I can pass my object into the second method as long as it supports the methods and properties of rabbit called by the second method. Is my object a duck or is it a rabbit? Like the above image, it’s neither and it’s both.

In many (if not most) dynamic languages, my object does not have to support all methods and properties of duck to be passed into a method that expects a duck. Same goes for a method that expects a rabbit. It only needs to support the methods and properties of the expected type that are actually called by the method.
*/ 
//# sourceMappingURL=IBook.js.map