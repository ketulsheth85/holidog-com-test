const AuthorController = require('../controller/AuthorController');
const BookController = require('../controller/BookController');
exports.routesConfig = function (app) {
    /* author operation routes */
    app.group("/api/author", (author) => {
        author.post('/save', [AuthorController.addAuthor]);
        author.get('/list', [AuthorController.allAuthor]);
        author.get('/:authorId', [AuthorController.findAuthorById]);
        author.put('/update', [AuthorController.updateAuthor]);
    });
    /* book operation routes */
    app.group("/api/book", (author) => {
        author.post('/save', [BookController.addBook]);
        author.get('/list', [BookController.allBooks]);
        author.get('/:bookId', [BookController.findBookById]);
        author.put('/update', [BookController.updateBook]);
    });
};