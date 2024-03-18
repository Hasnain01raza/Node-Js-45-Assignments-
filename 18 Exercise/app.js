// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Planning of honeyMoon Tour Destination Places :p  
var favPlaces = ["Bora Bora", "Bali", "Maldives", "Dubai", "Switzerland"];
console.log("original list Tour Destination Places :");
console.log(favPlaces);
console.log("Alphabetical order (without modifying the original list Tour Destination Places):");
console.log(__spreadArray([], favPlaces, true).sort());
console.log("Original list Tour Destination Places after alphabetical sorting:");
console.log(favPlaces);
console.log("Reverse alphabetical order (without modifying the original list Tour Destination Places):");
console.log(__spreadArray([], favPlaces, true).sort().reverse());
console.log("Original list Tour Destination Places after reverse alphabetical sorting:");
console.log(favPlaces);
favPlaces.reverse();
console.log("Reversed Tour Destination Places:");
console.log(favPlaces);
favPlaces.reverse();
console.log("Original list Tour Destination Places after double reversing:");
console.log(favPlaces);
favPlaces.sort();
console.log("Alphabetical order after sorting:");
console.log(favPlaces);
favPlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order after sorting:");
console.log(favPlaces);
