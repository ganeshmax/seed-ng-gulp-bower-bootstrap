describe('Controller: ContactCtrl', function() {
    beforeEach(module('ba'));

    var ctrl;
    beforeEach(inject(function($controller) {
        ctrl = $controller('ContactCtrl');
    }));

    it('should have 3 contacts on load', function() {
        expect(ctrl.contacts.length).toEqual(3);
    });

    it('should have alternate row classes correctly', function() {
        var actualClass = ctrl.getAlternateRowClass(0);
        expect(actualClass.active).toBeFalsy();

        actualClass = ctrl.getAlternateRowClass(1);
        expect(actualClass.active).toBeTruthy();
    });
});