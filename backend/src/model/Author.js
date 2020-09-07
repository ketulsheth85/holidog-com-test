const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName: {
        type:String,
        required:true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Author', AuthorSchema);