// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var DinnerInvitation = /** @class */ (function () {
    function DinnerInvitation() {
        this.guestList = [];
    }
    DinnerInvitation.prototype.addToGuestList = function (person) {
        this.guestList.push(person);
    };
    DinnerInvitation.prototype.removeFromGuestList = function (person) {
        var index = this.guestList.indexOf(person);
        if (index !== -1) {
            this.guestList.splice(index, 1);
            console.log("".concat(person, " can't make it to the dinner."));
        }
        else {
            console.log("".concat(person, " is not in the guest list."));
        }
    };
    DinnerInvitation.prototype.inviteToDinner = function (person) {
        console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. Please join us for a delightful evening!\nBest regards,\n[Your Name]"));
    };
    DinnerInvitation.prototype.sendInvitations = function () {
        var _this = this;
        this.guestList.forEach(function (person) {
            _this.inviteToDinner(person);
        });
    };
    return DinnerInvitation;
}());
// Creating a dinner invitation instance
var dinnerParty = new DinnerInvitation();
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
