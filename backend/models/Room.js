const mongoose = require('mongoose');

const Room = mongoose.model('Room',{
    name:String,
    description:String,
    id:String,
    admins:Array,
    users:Array

})

module.exports = Room;