/* config file */
const config = require('../config/env.config');
/* All response message list */
const Message = require('../service/Message');
/* call book model */
const BookModel = require('../model/Book');
/* Add book */
exports.addBook = (req, res, next) => {
    try{
        const book = new BookModel({
            name: req.body.name, 
            isbn: req.body.isbn,
            author : req.body.authorId
        });
        book.save().then(data => {
            return res.status(config.success_status).send({ msg:Message.book_add_success });
        }).catch (err => {
            return res.status(config.error_status).send({msg:Message.book_add_error });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};
/* get all books */
exports.allBooks = (req, res, next) => {
    try{
        var condition = {
            'firstName' : 'alex'
        };
        BookModel.find().sort({'name':'asc'}).then(list => {
            return res.status(config.success_status).send({ msg:Message.book_list_success, data:{ 'book' : list} });
        }).catch (err => {
            return res.status(config.error_status).send({msg:Message.book_list_error});
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};
/* get book by id */
exports.findBookById = (req, res, next) => {
    try{
        BookModel.findById(req.params.bookId).populate('author').then(book => { 
            if(!book){
                return res.status(config.error_status).send({msg:Message.author_get_error });
            }  
            return res.status(config.success_status).send({ msg:Message.book_get_success, data :book});
        }). catch (err =>{
            return res.status(config.error_status).send({msg:Message.book_get_error });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};
/* update book by id */
exports.updateBook = (req, res, next) => {
    try{
        BookModel.findByIdAndUpdate(req.body.bookId,{
            name: req.body.name, 
            isbn: req.body.isbn,
            author : req.body.authorId
        }).then(data => {
            return res.status(config.success_status).send({ msg:Message.book_update_success });
        }).catch (err => {
            return res.status(config.error_status).send({msg:Message.book_update_error });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};

