/**
 * Created by anantsingh on 7/26/2014.
 */

// ./controllers/event/create.js 


'use strict';

var Event = require('../../models/events');
var geocoder = require('geocoder');

//var express = require('express');
//var router = express.Router();

module.exports = function (router) {
    // accessed at POST: URL/event/create
    router.post('/', function (req, res) {

        console.log("Im here");
        var bhevent = new Event();
        bhevent.name = req.body.name;
        bhevent.description = req.body.description;
        bhevent.address.line1 = req.body.location.street;
        bhevent.address.city = req.body.location.city;
        bhevent.address.state = req.body.location.state;
        bhevent.address.zip = req.body.location.zip;
        bhevent.date = req.body.date;
        bhevent.contrib_type = [];
        if (req.body.desire.funds) {
            bhevent.contrib_type.push('funds');
        }
        if (req.body.desire.volunteers) {
            bhevent.contrib_type.push('volunteers');
        }
        var address = bhevent.address.line1 + ' ' + bhevent.address.city + ' ' +
            bhevent.address.state;

        geocoder.geocode(address, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(address);
                if (!data.results.length){
                    return;
                }
                var coords = data.results[0].geometry.location;
                console.log(coords);
                bhevent.location = {
                    name: bhevent.address.line1,
                    longitude: coords.lng,
                    latitude: coords.lat
                };

                console.log("bhevent.name is " + bhevent.name);
                bhevent.save(function (err) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else
                        res.json({ message: 'Beehive event created!' });
                })
            }
        });


    });
};
