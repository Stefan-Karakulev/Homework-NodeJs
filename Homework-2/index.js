
import fs from "fs";

const userInfo = "Bob Bobski is the best student in the school";
const userFilePath = 'user_info.txt';

fs.writeFileSync(userFilePath, userInfo);


const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction"
  },
  {
    id: 2,
    title: "Harry Potter ",
    author: "J.K Rowling",
    genre: "Science Fiction"
  },
  {
    id: 3,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Romance"
  },
  {
    id: 4,
    title: "The Giving Tree ",
    author: " Shel Silverstein",
    genre: "Fiction"
  }
];

const booksFile = 'booksData.txt';

books.forEach(book => {
  const bookInfo = `Id: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}\n`;
  fs.appendFileSync(booksFile, bookInfo);
});

