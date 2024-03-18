// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.



class DinnerInvitation {
    private guestList: string[];

    constructor() {
        this.guestList = [];
    }

    addToGuestList(person: string) {
        this.guestList.push(person);
    }

    removeFromGuestList(person: string) {
        const index = this.guestList.indexOf(person);
        if (index !== -1) {
            this.guestList.splice(index, 1);
            console.log(`${person} can't make it to the dinner.`);
        } else {
            console.log(`${person} is not in the guest list.`);
        }
    }

    inviteToDinner(person: string) {
        console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. Please join us for a delightful evening!\nBest regards,\n[Your Name]`);
    }

    sendInvitations() {
        this.guestList.forEach(person => {
            this.inviteToDinner(person);
        });
    }
}

// Creating a dinner invitation instance
const dinnerParty = new DinnerInvitation();

// Adding people to the guest list
dinnerParty.addToGuestList("Albert Einstein");
dinnerParty.addToGuestList("Leonardo da Vinci");
dinnerParty.addToGuestList("Maya Angelou");

// Sending out initial invitations
console.log("Initial invitations:");
dinnerParty.sendInvitations();

// Removing a guest who can't make it and inviting someone else instead
dinnerParty.removeFromGuestList("Leonardo da Vinci");
dinnerParty.addToGuestList("Marie Curie"); // Inviting Marie Curie instead

// Sending out updated invitations
console.log("\nUpdated invitations:");
dinnerParty.sendInvitations();
