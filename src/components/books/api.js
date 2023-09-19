import React from 'react'
import axios from 'axios';


const getAllBooks = async (data) => {
    return await axios.request({
        method: 'get',
        url: 'http://localhost:8081/products/list',
        headers: { Authorization: ` ${localStorage.getItem('authorization')}` }

    })
}
export const fetchAllBookData = async (setAllBooks, setRows, allBooks,setBookUpdate) => {
    try {
        const response = await getAllBooks()
        await setAllBooks(response.data);
        setRows(allBooks.map((book) => ({
            id: book._id,
            coverImage: book.image,
            price: book.price,
            rating: book.rating,
            stock: book.stock
        })))
        setBookUpdate(true)
    } catch (error) {
        console.error("API Error:", error);
    }
};

