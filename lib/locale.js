'use strict';

module.exports = function () {
    return function (req, res, next) {
        res.locals.locale = {
            country: 'FR',
            language: 'fr'
        };
        next();
    };
};
