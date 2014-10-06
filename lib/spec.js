'use strict';


var db = require('../lib/database');

module.exports = function spec(app) {

    return {
        onconfig: function (config, next) {
            db.config(config.get('databaseConfig'));
            next(null, config);
        }
    };
};