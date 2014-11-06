angular.module('ba').controller('ContactListCtrl', function (ContactSvc, $location) {
    var self = this;

    self.getAlternateRowClass = function(isOdd) {
        return {
            active: isOdd
        }
    };

    self.getAllContacts = function() {
        ContactSvc.getAll().then(
            function(response) {
                console.log("Success: " + response.data);
                self.contacts = response.data;
            },
            function(error) {
                console.log("Error: " + error)
            }
        )
    };

    self.showContact = function(id) {
        console.log("Moving to: " + '/contact/' + id);
        $location.path('/contact/' + id);
    };

    self.getAllContacts();

});