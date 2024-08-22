import { useState, useContext } from "react";
import { BookContext } from "./BookContext";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Typography,
    Checkbox
} from "@material-tailwind/react";

const UpdateForm = () => {
    const {
        handleCreateBook,
        updateBook,
        updateDialog,
        handleUpdateDialog,
        selectedBook,
        title,
        author,
        genre,
        read
    } = useContext(BookContext);

    return (
        <>
            <Dialog open={updateDialog} handler={handleUpdateDialog}>
                <DialogHeader>
                    Actualizar libro {selectedBook.title} 
                </DialogHeader>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    updateBook(selectedBook.id);
                    handleUpdateDialog();
                }}>
                    <DialogBody>
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Titulo <i>({selectedBook.title})</i>
                            </Typography>
                            <Input
                                size="lg"
                                placeholder={selectedBook.title}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "after:content-none",
                                }}
                                onChange={(e) => {
                                    handleCreateBook('title', e.target.value);
                                }}
                                required
                                value={title}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Autor (<i>{selectedBook.author}</i>)
                            </Typography>
                            <Input
                                size="lg"
                                placeholder={selectedBook.author}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "after:content-none",
                                }}
                                onChange={(e) => {
                                    handleCreateBook('author', e.target.value);
                                }}
                                required
                                value={author}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Género (<i>{selectedBook.genre}</i>)
                            </Typography>
                            <Input
                                size="lg"
                                placeholder={selectedBook.genre}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "after:content-none",
                                }}
                                onChange={(e) => {
                                    handleCreateBook('genre', e.target.value);
                                }}
                                required
                                value={genre}
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                                >
                                ¿Leído?

                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                            onChange={(e) => {
                                handleCreateBook('read', '');
                            }}
                            checked={read}
                        />
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleUpdateDialog}
                            className="mr-1"
                        >
                            <span>Cancelar</span>
                        </Button>
                        <Button variant="gradient" color="green" type="submit">
                            <span>Actualizar</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    )
}

export {
    UpdateForm
}