// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



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

    countGuests() {
        console.log(`Number of people invited to dinner: ${this.guestList.length}`);
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

// Counting the number of guests
dinnerParty.countGuests();
