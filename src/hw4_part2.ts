interface IBook {
  title: string;
  author: string;
  description: string;
}
interface IAuthor {
  name: string;
  books: IBook[];
}
interface IBookService {
  readonly authors: IAuthor[];
  readonly books: IBook[];
  getAllBooks(): IBook[];
  getAllAuthors(): IAuthor[];
  getBookByTitle(title: string): IBook | undefined;
  getAuthorByName(name: string): IAuthor | undefined;
}
class BookService implements IBookService {
  authors: IAuthor[] = [
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
  books: IBook[] = [
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
 
  getAllBooks(): IBook[] {
    return this.books;
  }
  getAllAuthors(): IAuthor[] {
    return this.authors;
  }
  getBookByTitle(title: string): IBook | undefined {
    return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
  }
  getAuthorByName(name: string): IAuthor | undefined {
    return this.authors.find(author => author.name.toLowerCase() === name.toLowerCase());
    }
    addAuthor(author: IAuthor): void {
    this.authors.push(author);
  }
  addBook(book: IBook): void {
    this.books.push(book);
    const author = this.getAuthorByName(book.author);
    if (author) {
      author.books.push(book);
    } else {
      this.addAuthor({ name: book.author, books: [book] });
    }
  }
}

interface IBookService {
  addAuthor(author: IAuthor): void;
  addBook(book: IBook): void;
}
