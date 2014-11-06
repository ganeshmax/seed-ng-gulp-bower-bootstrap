'use strict';
angular.module('ba').service('ResourceSvc', function () {
    return {
        itemPath: function(basePath, id) {
            return basePath + '/' + id;
        }
    }
});