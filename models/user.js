/**
 * Created by anantsingh on 7/26/2014.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = function(){
    var userSchema = Schema({
        email: String,
        profile: Schema.Types.Mixed,
        accounts:{
            local:{
                login:String,
                password:String
            },
            paypal:{
                userId:String,
                access_token:String,
                refresh_token:String
            }
        }

    })


};