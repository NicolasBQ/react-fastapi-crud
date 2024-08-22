import { Typography } from "@material-tailwind/react";
import { BookOpenIcon } from "@heroicons/react/16/solid";

const Header = () => {
    return (
        <header className="w-full p-3 flex justify-center items-center gap-2">
            <Typography variant="h1" color="blue">
                Books CRUD
            </Typography>
            <BookOpenIcon className="w-12 h-12" color="blue"/>
        </header>
    )
}

export {
    Header
}