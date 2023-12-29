var BookService = /** @class */ (function () {
    function BookService() {
        this.authors = [
            {
                name: 'Harper Lee',
                books: [
                    {
                        title: 'To Kill a Mockingbird',
                        author: 'Harper Lee',
                        description: '',
                    },
                    {
                        title: 'Go Set a Watchman',
                        author: 'Harper Lee',
                        description: '',
                    },
                ],
            },
            {
                name: 'George Orwell',
                books: [
                    {
                        title: '1984',
                        author: 'George Orwell',
                        description: '',
                    },
                    {
                        title: 'Animal Farm',
                        author: 'George Orwell',
                        description: '',
                    },
                ],
            },
            {
                name: 'J.R.R. Tolkien',
                books: [
                    {
                        title: 'The Lord of the Rings',
                        author: 'J.R.R. Tolkien',
                        description: '',
                    },
                ],
            },
        ];
        this.books = [
            {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                description: '',
            },
            {
                title: 'Go Set a Watchman',
                author: 'Harper Lee',
                description: '',
            },
            {
                title: '1984',
                author: 'George Orwell',
                description: '',
            },
            {
                title: 'Animal Farm',
                author: 'George Orwell',
                description: '',
            },
            {
                title: 'The Lord of the Rings',
                author: 'J.R.R. Tolkien',
                description: '',
            },
        ];
    }
    BookService.prototype.getAllBooks = function () {
        return this.books;
    };
    BookService.prototype.getAllAuthors = function () {
        return this.authors;
    };
    BookService.prototype.getBookByTitle = function (title) {
        return this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
    };
    BookService.prototype.getAuthorByName = function (name) {
        return this.authors.find(function (author) { return author.name.toLowerCase() === name.toLowerCase(); });
    };
    BookService.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    BookService.prototype.addBook = function (book) {
        this.books.push(book);
        var author = this.getAuthorByName(book.author);
        if (author) {
            author.books.push(book);
        }
        else {
            this.addAuthor({ name: book.author, books: [book] });
        }
    };
    return BookService;
}());
