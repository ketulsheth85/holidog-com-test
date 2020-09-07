/* config file */
const config = require('../config/env.config');
/* All message list */
const Message = require('../service/Message');
/* call author model */
const AuthorModel = require('../model/Author');
/* Add author */
exports.addAuthor = (req, res, next) => {
    try{
        const author = new AuthorModel({
            firstName: req.body.firstName, 
            lastName: req.body.lastName
        });
        author.save().then(data => {
            return res.status(config.success_status).send({ msg:Message.author_add_success });
        }).catch (err => {
            return res.status(config.error_status).send({msg:err.message });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};
/* get  author list */
exports.allAuthor = (req, res, next) => {
    try{
        var condition = {
            'firstName' : 'alex'
        };
        AuthorModel.find().sort({'firstName':'asc'}).then(list => {
            return res.status(config.success_status).send({ msg:Message.author_list_success, data:{ 'author' : list} });
        }).catch (err => {
            return res.status(config.error_status).send({msg:Message.author_list_error });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};
/* get  author by id */
exports.findAuthorById = (req, res, next) => {
    try{
        AuthorModel.findById(req.params.authorId).then(author => { 
            if(!author){
                return res.status(config.error_status).send({msg:Message.author_get_error });
            } 
            return res.status(config.success_status).send({ msg:Message.author_get_success, data :author});
        }). catch (err =>{
            return res.status(config.error_status).send({msg:Message.author_get_error });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};
/* update author by id */
exports.updateAuthor = (req, res, next) => {
    try{
        AuthorModel.findByIdAndUpdate(req.body.authorId,{firstName: req.body.firstName, lastName: req.body.lastName}).then(data => {
            return res.status(config.success_status).send({ msg:Message.author_update_success });
        }).catch (err => {
            return res.status(config.error_status).send({msg:Message.author_update_error });
        });
    }catch(err){
        return res.status(config.error_status).send({msg:Message.default_error }); 
    }
};

