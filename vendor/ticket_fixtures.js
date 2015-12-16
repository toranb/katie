var WAT = (function() {
    var factory = function() {
    };
    factory.prototype.generate = function(i) {
        var x = new Date();
        console.log(x);
        return x;
    };
    return factory;
})();

if (typeof window === 'undefined') {
    module.exports = new WAT().defaults();
} else {
    define('katie/vendor/ticket_fixtures', ['exports'], function (exports) {
        'use strict';
        var Factory = new WAT();
        return {default: Factory};
    });
}
