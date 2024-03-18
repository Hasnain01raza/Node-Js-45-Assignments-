// 14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.



class DinnerInvitation {
    private guestList: string[];

    constructor() {
        this.guestList = [];
    }

    addToGuestList(person: string) {
        this.guestList.push(person);
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

// Sending out invitations
dinnerParty.sendInvitations();
