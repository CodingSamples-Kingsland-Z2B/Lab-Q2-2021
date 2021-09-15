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

const harryPotterTrigger = document.getElementById('harry-potter-trigger');
const lordOfTheRingsTrigger = document.getElementById('lord-of-the-rings-trigger');
const bookContent = document.getElementById('book-content');

function showBook(id) {
    const book = books.find(book => book.id === id);

    if (book) {
        bookContent.innerHTML = `
            <h1>Title: ${book.title}</h1>
            <h1>Author: ${book.author}</h1>
            <h1>Release: date ${book.releaseDate}</h1>
        `;
    }
}

harryPotterTrigger.addEventListener('click', () => {
    const bookId = 1;
    
    history.pushState({ bookId }, '', `#/book/${bookId}`);
    showBook(bookId);
});

lordOfTheRingsTrigger.addEventListener('click', () => {
    const bookId = 2;

    history.pushState({ bookId }, '', `#/book/${bookId}`);
    showBook(bookId);
});

window.addEventListener('popstate', ({ state }) => {
    if (!state) {
        bookContent.innerHTML = '';
    }

    const { bookId } = state;

    showBook(bookId);
});