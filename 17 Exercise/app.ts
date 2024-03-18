//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



// Shrinking Guest List
let Guestlist: string[] = ["Susral", "Groups Members", "Friends", "Relatives", ""];

console.log("Original guest list:", Guestlist);

// Inform that only two people can be invited
console.log("Unfortunately, the dinner table will only accommodate two guests.");

// Remove guests until only two names remain
while (Guestlist.length > 2) {
    const removedGuest = Guestlist.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

// Print messages to the two remaining guests
for (const remainingGuest of Guestlist) {
    console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
}

// Remove the last two names
Guestlist = [];

// Print to ensure the list is empty
console.log("Updated guest list after shrinking:", Guestlist);


