import { useEffect, useState, useContext } from "react";
import { BookContext } from "./BookContext";
import { get_books } from "./service/get_books";
import { Card, Typography } from "@material-tailwind/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { UpdateForm } from "./UpdateForm";


const TABLE_HEAD = ["Título", "Autor", "Género", "Estado", "", ""];

const BooksTable = () => {
    const {
        books,
        readBooks,
        readError,
        readMessage,
        deleteBook,
        handleUpdateDialog,
        handleSelectedBook,
        createMessage,
        createError,
        updateMessage,
        updateError,
        deleteMessage,
        deleteError
    } = useContext(BookContext);

    useEffect(() => {
        readBooks();
    }, [])


    return (
        <>
            {readError && (
                <Typography color="red">
                        {readMessage}
                </Typography>
            )}
            {createMessage && (
                <Typography className={`${createError ? 'text-red-500' : 'text-green-500'}`}>
                    {createMessage}
                </Typography>
            )}
            {updateMessage && (
                <Typography className={`${updateError ? 'text-red-500' : 'text-green-500'}`}>
                    {updateMessage}
                </Typography>
            )}
            {deleteMessage && (
                <Typography className={`${deleteError ? 'text-red-500' : 'text-green-500'}`}>
                    {deleteMessage}
                </Typography>
            )}
            <Card className="h-full w-3/4 overflow-none">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                                >
                                {head}
                                </Typography>
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {books.map((book, index) => {
                        const isLast = index === books.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                        return (
                        <tr key={book.id}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {book.title}
                                </Typography>
                            </td>
                                <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {book.author}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {book.genre}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className={`font-bold ${book.read ? 'text-green-500' : 'text-red-500'}`}
                                >
                                    {book.read ? 'Leído' : 'No leído'}
                                </Typography>
                            </td>
                            <td className={classes} onClick={() => {
                                handleSelectedBook(book);
                                handleUpdateDialog();
                            }}>
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    <PencilSquareIcon className="w-6 h-6" color="blue"/>
                                </Typography>
                            </td>
                            <td className={classes} onClick={() => {
                                deleteBook(book.id)
                            }}>
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    <TrashIcon className="w-6 h-6" color="red"/>
                                </Typography>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                <UpdateForm />
            </Card>
        </>
    )
}

export {
    BooksTable
}