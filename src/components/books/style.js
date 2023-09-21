import { makeStyles } from "@material-ui/core/styles";

const useStylesIndex = makeStyles({
    tableHeader: {
        display: "flex"
    },
    heading: {
        width: "50%",
        padding: "20px 30px 10px 0px ",
    },
    addBooKButtonDiv: {
        width: "50%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 30px 10px 0px ",
    },
    addBooKButton: {
        backgroundColor: "#d22129",
        color: "#fff",
        textTransform: "none",
        fontFamily: "Montserrat, sans-se",
        "&:hover": {
            backgroundColor: "#d22129",
            color: "#fff",
            boxShadow: "0 0px 5px rgba(210,33,41)"
        }
    },
    tableMain: {
        // border:"1px solid black",
        padding: "10px 0px",
        height: "100%"
    }
});
export { useStylesIndex }

const useStylesTable = makeStyles({
    tableMain: {
        // border:"1px solid black",
        padding: "10px 30px 10px 30px",
        height: "100%"
    },
    price: {
        padding: "0px 30px 0px 30px"
    },
    pagination:{border:"1px solid red"},
    paginationDefault:{
        // border:"1px solid red",
        '&.css-rtrcn9-MuiTablePagination-root .MuiTablePagination-selectLabel':{
            margin:"0px"
        },
        '& .css-levciy-MuiTablePagination-displayedRows':{
            margin:"0px",
           
        }
   
    },
    dataGrid: {
        padding:"20px"
    },



});
export { useStylesTable }

const useStylesAddBook = makeStyles({
    mainBox: {
        // border:"1px solid black",
    },
    headingAddBook: {
        display: "flex",
        justifyContent: "left",
        width: "100%",
        padding: "20px"
    },
    addBookForm: {
        // border:"1px solid red",
        padding: "10px 15px"
    },
    bookCover: {
        display: "flex",
    },
    photoDiv: {
        width: "12%",
        padding: "15px 0px 5px 0px",
        display: "block",
        height: "auto"
    },
    photoHeading: {
        padding: "7px 0px"
    },
    photo: {
        width: "100%",
        display: "block",
    },
    uploadImage: {
        width: "88%",
        display: "flex",
        justifyContent: "end",
        padding: "220px 0px 0px 0px"
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.08)',
                borderStyle:"solid",
            },
            '&:hover fieldset': {
                borderColor: '#d22129',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#d22129',
            },
        },
    },


});
export { useStylesAddBook }