'use strict';

module.exports = function () {
    return function (req, res, next) {
        res.locals.context = {
            locality: {
                country: 'FR',
                language: 'fr'
            }
        };
        next();
    };
};
