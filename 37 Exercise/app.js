// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    return Shirt;
}());
function make_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return new Shirt(size, message);
}
// Creating a large shirt with the default message
var largeShirt = make_shirt();
console.log("Large Shirt:", largeShirt);
// Creating a medium shirt with the default message
var mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);
// Creating a custom shirt with a different message and size
var customShirt = make_shirt("small", "TypeScript is awesome!");
console.log("Custom Shirt:", customShirt);
