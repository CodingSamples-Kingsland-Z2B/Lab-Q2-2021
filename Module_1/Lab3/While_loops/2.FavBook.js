function main(favBook, bookList) {
  while (true) {
    const currBook = bookList.shift();
    if (favBook === currBook) {
      console.log("Book found!");
      break;
    }
    console.log("Invalid book: " + currBook);
  }
}
