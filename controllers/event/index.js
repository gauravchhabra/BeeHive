/**
 * Created by anantsingh on 7/26/2014.
 */
'use strict';
var geolib = require('geolib');
var Event = require('../../models/events');
var events = [
    {
        "event_id" :1,
        "name" : "Pet Adoption",
        "description":"",
        "location":{
            "name":"San Jose",
            "longitude":37.333877,
            "lattitude":-121.882644
        }
    },
    {
        "event_id" :2,
        "name" : "School Kit doantion",
        "description":"",
        "location":{
            "name":"Santa Clara",
            "longitude":37.333577,
            "lattitude":-121.882744
        }
    }];
module.exports = function(router){

    router.get('/nearby' ,function(req, res){
        var lat = req.query.lat,
            long = req.query.long;
        var retVal = [];
        if(!lat || !long){
            res.json({
                status: 500,
                msg: 'Undefined params'
            });
        }
        Event.find({}, function(err, events){
            console.log(events);
            if(err){
                res.json({
                    status: 400,
                    msg: "DB Error"
                });
                return;
            }
            events.forEach(function(event){
                console.log(event);
                console.log(event.location);
                var check = geolib.isPointInCircle(
                    {longitude:event.location.longitude, latitude:event.location.latitude},
                    {longitude:long, latitude: lat},
                    5000
                );

                if (check){
                    retVal.push(event);
                }
            });
            res.json(retVal);
        });
    })
};