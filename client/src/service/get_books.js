const get_books = async () => {
    try {
        const connect = await fetch('http://127.0.0.1:8000/', {
            method: 'get'
        })

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
    get_books
}