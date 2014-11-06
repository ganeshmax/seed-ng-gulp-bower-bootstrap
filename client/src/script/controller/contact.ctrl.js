angular.module('ba').controller('ContactCtrl', function (ContactSvc) {
    var self = this;

    self.getAlternateRowClass = function(isOdd) {
        return {
            active: isOdd
        }
    };

    self.getAllContacts = function() {
        ContactSvc.getAll().then(
            function(successResponse) {
                console.log("Success Response" + successResponse.data);
                self.contacts = successResponse.data;
            },
            function(errorResponse) {
                console.log("Error: " + errorResponse)
            }
        )
    };

    self.getAllContacts();

    self.contacts = [
        {
            id: 1,
            name: {
                first: "Ganeshji",
                last: "Marwaha"
            },
            address: {
                line1: "GM Line 1",
                line2: "GM Line 2",
                city: "GM City",
                state: "GM State",
                code: "GM Code",
                country: "GM Country"
            },
            email: "ganeshji.marwaha@email.com",
            phone: "99999 11111"
        },
        {
            id: 2,
            name: {
                first: "Ubahariya",
                last: "Natarajan"
            },
            address: {
                line1: "UN Line 1",
                line2: "UN Line 2",
                city: "UN City",
                state: "UN State",
                code: "UN Code",
                country: "UN Country"
            },
            email: "ubahariya.natarajan@email.com",
            phone: "99999 22222"

        },
        {
            id: 3,
            name: {
                first: "Satish",
                last: "Kumar"
            },
            address: {
                line1: "SK Line 1",
                line2: "SK Line 2",
                city: "SK City",
                state: "SK State",
                code: "SK Code",
                country: "SK Country"
            },
            email: "satish.kumar@email.com",
            phone: "99999 33333"
        }
    ];

});