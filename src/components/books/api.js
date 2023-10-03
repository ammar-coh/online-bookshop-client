import axios from 'axios';



const getAllBooks = async (data) => {
    return await axios.request({
        method: 'get',
        url: 'http://localhost:8081/book/list',
        headers: { Authorization: ` ${localStorage.getItem('authorization')}` }

    })
}
export const fetchAllBookData = async (setAllBooks, setRows, allBooks, setBookListUpdate) => {
    try {
        const response = await getAllBooks()
        await setAllBooks(response.data);
        setRows(allBooks.map((book) => ({
            id: book._id,
            coverImage: book.image,
            price: book.price,
            rating: book.rating,
            stock: book.stock,
            title: book.title,
            category: book.category,
            author: book.author,
            description: book.description
        })))
        setBookListUpdate(true)
    } catch (error) {
        console.error("API Error:", error);
    }
};

const deleteBook = (bookId) => {
    console.log("id at deleteBook function", bookId)
    return axios.request({
        method: 'delete',
        url: `http://localhost:8081/book/list/${bookId}`, // Include the product ID in the URL
        headers: { Authorization: ` ${localStorage.getItem('authorization')}` },
    });
};
export const bookRemoved = async (id, setRows, rows, alertContent, setAlertContent, setAlertOpen) => {
    try {
        const bookId = id
        const response = await deleteBook(bookId)
        if (response.status == 200) {
            setRows(rows.filter((row) => row.id !== id));
            setAlertContent({ ...alertContent, type: "success", message: 'Book Deleted Successfully!' })
            setAlertOpen(true)
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
    }
}


const updateBook = (bookId, data) => {
    return axios.request({
        method: 'put',
        url: `http://localhost:8081/book/list/${bookId}`, // Replace with your PUT endpoint
        headers: {
            Authorization: ` ${localStorage.getItem('authorization')}`, // Use the appropriate header format
            'Content-Type': 'multipart/form-data', 
        },
        data: data, // The data you want to send in the request body
    });
};

export const bookUpdated = async (bookId, updatedRow, cover,alertContent, setAlertContent, setAlertOpen,updateBookList,dispatch) => {
    try {
        const bookData = updatedRow
        const data = new FormData();
        const imageObject = cover.find(item => item.id === bookId);
        if (imageObject) {
            const index = cover.indexOf(imageObject);
            if (index !== -1) { cover.splice(index, 1); }
            data.append('image',imageObject.image )
        }  
        for (const [key, value] of Object.entries(bookData)) {
            if (value !== null && value !== undefined) {
              data.append(key, value);
            }
          }
          data.forEach((value, key) => {
            console.log(key, value);
          });
        const response = await updateBook(bookId, data)
        if (response.status == 200 && response.data.status == true) {
            setAlertContent({ ...alertContent, type: "success", message: 'Information Saved!' })
            setAlertOpen(true)
            dispatch(updateBookList(response.data.book))
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
    }
}


  const newBook = (data) => {
    return axios.request({
      method: 'post',
      url: 'http://localhost:8081/book/list', // Replace with your POST endpoint
      headers: {
        Authorization: `${localStorage.getItem('authorization')}`, // Use the appropriate header format
        'Content-Type': 'multipart/form-data',
      },
      data: data, // The data you want to send in the request body
    });
  };



  export const bookAdded = async (data, alertContent, setAlertContent, setAlertOpen, reset,setUserProfileImg,setIsUserImgSelected) => {
    console.log("data final", data)
    try {
        const response = await newBook(data)
        if (response.status == 200 && response.data.status == true) {
            setAlertContent({ ...alertContent, type: "success", message: 'New Book in Inventory Added!' })
            setAlertOpen(true)
            reset();
            setIsUserImgSelected(false)
         
          
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
    }
}
