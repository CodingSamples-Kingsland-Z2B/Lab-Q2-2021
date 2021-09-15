const app = Sammy('#sammy-app', function() {
    this.use('Handlebars', 'hbs');

    const handleAbout = () => {
        this.swap('<h1>Hello from the about page</h1>');
    };

    const handleHome = () => {
        this.swap('<h1>home page message</h1>');
    };

    const getLogin = () => {
        this.swap(`
            <form method="POST" action="#/login">
                <label for="user-email">Email:</label>
                <input type="email" id="user-email" name="email" />
                
                <label for="user-password">Password:</label>
                <input type="password" id="user-password" name="password" />
                
                <button type="submit">Login</button> 
            </form>
        `);
    };

    const handleLogin = ({ params }) => {
        const { email, password } = params;

        this.swap(`<div>You got hacked! Your email and password are: ${email} ${password}</div>`);
    };

    const books = [
        {
            id: 1,
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            releaseDate: 1995
        },
        {
            id: 2,
            title: 'The Lord of the Rings',
            author: 'J.R.R Tolkien',
            releaseDate: 2001,
        },
    ];
    class BooksController {
        handleGetBook(context) {
            const bookId = parseInt(context.params.bookId);
            const book = books.find(book => book.id === bookId);
    
            context.loadPartials({ bookInfo: './book-info.hbs' })
                .then(() => {
                    context.book = book;
                    context.partial('book-info.hbs');
                });
        }
        
        handleGetBooks(context) {
            context.loadPartials({ bookInfo: './books.hbs' })
                .then(() => {
                    context.books = books;
                    context.partial('books.hbs');
                });
        }
    }

    const bookController = new BooksController();

    this.get('/', handleHome);
    this.get('#/about', handleAbout);
    
    this.get('#/books/:bookId', bookController.handleGetBook);
    this.get('#/books', bookController.handleGetBooks);
    
    this.get('#/login', getLogin);
    this.post('#/login', handleLogin);
});

(() => app.run())();