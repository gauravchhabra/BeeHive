/**
 * Created by anantsingh on 7/26/2014.
 */
'use strict';

module.exports = function(router){
    router.get('/login',function(req,res){

    });

    router.get('/signup', function(req, res){
        var type = req.query.auth_type,
            access_token = req.query.access_token,
            refresh_token = req.query.refresh_token,
            scope=req.query.scope;


    });
};