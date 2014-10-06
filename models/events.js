/**
 * Created by anantsingh on 7/26/2014.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var eventModel = function(){
    var eventSchema = Schema({
        name: String,
        date: Date,
        description: String,
        contrib_type: [String],
        address: {
            line1: String,
            line2: String,
            city:String,
            state: String,
            zip: String
        },
        location:{
            name:String,
            longitude: Number,
            latitude: Number
        },
        donations:{
            desired: Number,
            current: Number,
            donations_list:[{
                user_id: Schema.Types.ObjectId,
                donation_amount: Number
            }]
        },
        volunteers:{
            desired: Number,
            current: Number,
            attending: [{user_id: Schema.Types.ObjectId}]
        },
        rewards:[{
            name: String,
            description: String,
            amount: Number
        }]

    });

    return mongoose.model('Events', eventSchema);
};

module.exports = new eventModel();