import { createContext, useState } from "react";
import { get_books } from "./service/get_books";
import { create_book } from "./service/create_book";
import { delete_book } from "./service/delete_book";
import { update_book } from "./service/update_book";

const BookContext = createContext();


const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [read, setRead] = useState(false);

    const [readMessage, setReadMessage] = useState('');
    const [createMessage, setCreateMessage] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');

    const [readError, setReadError] = useState(false);
    const [createError, setCreateError] = useState(false);
    const [updateError, setUpdateError] = useState(false);
    const [deleteError, setDeleteError] = useState(false);

    const [updateDialog, setUpdateDialog] = useState(false);
    const [selectedBook, setSelectedBook] = useState({
        title: '',
        author: '',
        genre: '',
        read: false
    });
    
    const handleCreateBook = (field, value) => {
        switch(field) {
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'genre':
                setGenre(value);
                break;
            case 'read':
                setRead((curr) => !curr);
        }
    }

    const readBooks = async () => {
        const response = await get_books();

        if(!response.success) {
            setReadMessage(response.message);
            return setReadError(true);
        }

        setBooks(response.response);
        setReadError(false);
    }

    const createBook = async () => {
        const book = {
            title: title,
            author: author,
            genre: genre,
            read: read
        };

        const create = await create_book(book);
        setCreateMessage(create.message);
        if(!create.success) {
            setCreateError(true);
        } else {
            setTitle('');
            setAuthor('');
            setGenre('');
            setRead(false);
            setBooks(create.response);
            setCreateError(false);
        }

        setTimeout(() => {
            setCreateMessage('');
        }, 1500)
    }

    const updateBook = async (id) => {
        const book = {
            title: title,
            author: author,
            genre: genre,
            read: read
        };

        const update = await update_book(id, book);
        setUpdateMessage(update.message);
        if(!update.success) {
            setUpdateError(true);
        } else {
            setBooks(update.response);
            setUpdateError(false);
        }

        setTimeout(() => {
            setUpdateMessage('');
        }, 1500)
    }

    const deleteBook = async (book_id) => {
        const deleteReq = await delete_book(book_id);
        setDeleteMessage(deleteReq.message);
        if(!deleteReq.success) {
            setDeleteError(true);
        } else {
            setBooks(deleteReq.response);
            setDeleteError(false);
        }

        setTimeout(() => {
            setDeleteMessage('');
        }, 1500)
    }

    const handleUpdateDialog = () => {
        setUpdateDialog((curr) => !curr)
    }

    const handleSelectedBook = (book) => {
        setSelectedBook(book);
        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
        setRead(book.read);
    }

    return (
        <BookContext.Provider value={{
            books,
            handleCreateBook,
            readBooks,
            createBook,
            deleteBook,
            updateBook,
            updateDialog,
            handleUpdateDialog,
            selectedBook,
            handleSelectedBook,
            title,
            author,
            genre,
            read,
            readError,
            readMessage,
            createMessage,
            createError,
            updateMessage,
            updateError,
            deleteMessage,
            deleteError
        }}>
            {children}
        </BookContext.Provider>
    )
}

export {
    BookContext,
    BookProvider
}