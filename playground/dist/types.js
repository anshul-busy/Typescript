"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRole(role) {
    if (role === "admin") {
        console.log("this is admin");
    }
    if (role === "user") {
        console.log("this is user");
    }
}
console.log(checkRole("admin"));
//# sourceMappingURL=types.js.map

type order{
    
    sugar: Boolean,
}