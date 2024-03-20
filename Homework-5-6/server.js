import express from 'express';
import fs from 'fs';
import { BookController } from './controller/bookController.js';
const app = express();


 
app.use(express.json());

app.listen(3000, 'localhost', () => {
    console.log(`Server is running`);
});

const dbFilePath = './books_store.db.json';


app.get('/books', async (req, res) => {
    try {
        
        const data = await fs.promises.readFile(dbFilePath, 'utf8');
        const books = JSON.parse(data);
        
       
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.send(' Server Error');
    }
});


app.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;

    try {
      
       const data = await fs.promises.readFile(dbFilePath, 'utf8');
       const books = JSON.parse(data);
       
       
       const book = books.find(book => book.id === bookId);
       res.send(book);
    } catch (error) {
        console.error('Error:', error);
        res.send(' Server Error');
    }
});


app.post('/books', async (req, res) => {
    const newBook = req.body;

    try {
        const data = await fs.promises.readFile(dbFilePath, 'utf8');
        const books = JSON.parse(data);
        books.push(newBook);
        await fs.promises.writeFile(dbFilePath, JSON.stringify(books), 'utf8');
        res.status(201).send(newBook);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server Error');
    }
});

app.put('/books/:id',async(request, response) => {
    try{
        const bookId = request.params.id;
        const newData = request.body;
        const controller = new BookController();
        const message = await controller.updateBook(bookId, newData);
        response.status(200).send(message);
    }catch(error){
        response.status(404).send({ message: error.message });
    }

});
app.delete('/books/:id',async(request, response) => {
    try{
        const bookId = request.params.id;
        const controller = new BookController();
        const message = await controller.deleteBook(bookId);
        response.status(200).send(message);
    }catch(error){
        response.status(404).send({ message: error.message });
    }
});
