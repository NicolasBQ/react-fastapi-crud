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



const CreateForm = () => {
    const {
        handleCreateBook,
        createBook
    } = useContext(BookContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} className="w-1/3">
                Crear Libro 
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    Crear nuevo libro 
                </DialogHeader>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createBook();
                    handleOpen();
                }}>
                    <DialogBody>
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Titulo
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Titulo del libro"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => {
                                    handleCreateBook('title', e.target.value);
                                }}
                                required
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Autor
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Autor del libro"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => {
                                    handleCreateBook('author', e.target.value);
                                }}
                                required
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Género
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Género del libro"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => {
                                    handleCreateBook('genre', e.target.value);
                                }}
                                required
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
                        />
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancelar</span>
                        </Button>
                        <Button variant="gradient" color="green" type="submit">
                            <span>Crear</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    )
}

export {
    CreateForm
}