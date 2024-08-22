const update_book = async (id, book) => {
    try {
        const connect = await fetch(`http://127.0.0.1:8000/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        const response = await connect.json();
        return response;
    } catch(err) {
        return {
            success: false,
            message: 'Error al leer los libros de la base de datos'
        }
    }
}

export {
    update_book
}