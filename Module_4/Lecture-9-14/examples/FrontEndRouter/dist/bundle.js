!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){Sammy("#sammy-app",(function(){this.use("Handlebars","hbs");const e=[{id:1,title:"Harry Potter",author:"J.K. Rowling",releaseDate:1995},{id:2,title:"The Lord of the Rings",author:"J.R.R Tolkien",releaseDate:2001}];const o=new class{handleGetBook(o){const t=parseInt(o.params.bookId),n=e.find(e=>e.id===t);o.loadPartials({bookInfo:"./book-info.hbs"}).then(()=>{o.book=n,o.partial("book-info.hbs")})}handleGetBooks(o){o.loadPartials({bookInfo:"./books.hbs"}).then(()=>{o.books=e,o.partial("books.hbs")})}};this.get("/",()=>{this.swap("<h1>home page message</h1>")}),this.get("#/about",()=>{this.swap("<h1>Hello from the about page</h1>")}),this.get("#/books/:bookId",o.handleGetBook),this.get("#/books",o.handleGetBooks),this.get("#/login",()=>{this.swap('\n            <form method="POST" action="#/login">\n                <label for="user-email">Email:</label>\n                <input type="email" id="user-email" name="email" />\n                \n                <label for="user-password">Password:</label>\n                <input type="password" id="user-password" name="password" />\n                \n                <button type="submit">Login</button> \n            </form>\n        ')}),this.post("#/login",({params:e})=>{const{email:o,password:t}=e;this.swap(`<div>You got hacked! Your email and password are: ${o} ${t}</div>`)})})).run()}]);