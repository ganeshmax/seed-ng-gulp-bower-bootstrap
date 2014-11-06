angular.module('ba').controller('ContactDetailCtrl', function ($routeParams, ContactSvc) {
    var self = this;

    self.contact = {};

    self.getContact = function(id) {
        ContactSvc.get(id).then(
            function(response) {
                console.log("Success: " + response.data);
                self.contact = response.data;
            },
            function(error) {
                console.log("Error: " + error)
            }
        )
    };

    self.getContact($routeParams.id);

});