const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    isbn: {
        type:String,
        required:true,
        unique: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Author'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);