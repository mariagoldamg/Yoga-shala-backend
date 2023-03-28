const mongoose = require ('mongoose');


const treckerSchema = new mongoose.Schema ({
    name:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Trecker', treckerSchema);