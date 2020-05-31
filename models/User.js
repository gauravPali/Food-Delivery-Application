const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // favs:[Number],
    // order:[]
})

module.exports =  mongoose.model('User',userSchema);