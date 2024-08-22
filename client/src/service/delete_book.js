const delete_book = async (id) => {
    try {
        const connect = await fetch(`http://127.0.0.1:8000/delete/${id}`, {
            method: 'DELETE'
        });

        const response = await connect.json();
        return response
    } catch(err) {
        return {
            success: false,
            message: 'Error al leer los libros de la base de datos'
        }
    }
}

export {
    delete_book
}