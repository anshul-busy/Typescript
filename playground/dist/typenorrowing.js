"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getstr(str) {
    if (typeof str === 'string') {
        return `hello ${str}`;
    }
    return "hello";
}
class Hello {
    greeting() {
        return `Hello world`;
    }
}
class Hello2 {
    greeting2() {
        return `Hello world`;
    }
}
function greet(str) {
    if (str instanceof Hello2) {
        return str.greeting2; //type checking
    }
}
//# sourceMappingURL=typenorrowing.js.map