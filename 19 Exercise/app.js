// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
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
    DinnerInvitation.prototype.countGuests = function () {
        console.log("Number of people invited to dinner: ".concat(this.guestList.length));
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
// Counting the number of guests
dinnerParty.countGuests();
