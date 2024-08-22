const create_book = async (book) => {
    try {
        const connect = await fetch('http://127.0.0.1:8000/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        const response = await connect.json();
        return response
    } catch(err) {
        console.log('ERROR FROM CLIENT', err);
        return {
            success: false,
            message: 'Error al crear libro base de datos'
        }
    }
}

export {
    create_book
}