/**
 * Created by Ivan on 1/30/2017.
 */

const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    verified: Boolean,
    token: String,
    date_created : {type: Date, default: Date.now()}
});

User = mongoose.model('User',UserSchema);

module.exports=User;