import { makeStyles } from "@material-ui/core/styles";

const useStylesIndex = makeStyles({
    main: { width: "100%" },
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
        height: "100%",
        width: "100%"
    }
});
export { useStylesIndex }

const useStylesTable = makeStyles({
    tableMain: {
        // border:"1px solid black",
        padding: "10px 30px 10px 30px",
        height: "100%"
    },
    author:{
        margin:"auto"
    },
    paragraph2: {
        display: "-webkit-box",
        textAlign: "center",
        margin: "0px",
        //    width:"100%",
        //    whiteSpace: 'pre-wrap',
        //    overFlow: 'hidden',
        wordBreak: 'break-all',
        '-webkit-line-clamp': 6,
        '-webkit-box-orient': 'vertical',
        fontSize: "16px",
        fontFamily: "Montserrat, sans-se",
    },
    paragraph: {
        //  "&.css-ahj2mt-MuiTypography-root":{
        //     overFlow:"hidden"
        //  }
    },
    category: {
        padding: "0px 30px 0px 30px",
        fontSize: "16px",
        fontFamily: "Montserrat, sans-se",
        margin:"auto"
    },
    description: {
        width: "100%",
        height: "auto",
        whiteSpace: 'normal',
        margin:"auto"

    },
    title: {
        padding: "0px 30px 0px 30px",
        margin:"auto"
    },
    rating:{
        margin:"auto"
    },
    price: {
        padding: "0px 30px 0px 30px",
        margin:"auto"

    },
    grid:{
        margin:  "auto"
    },
    pagination: { border: "1px solid red" },
    paginationDefault: {
        // border:"1px solid red",
        '&.css-rtrcn9-MuiTablePagination-root .MuiTablePagination-selectLabel': {
            margin: "0px"
        },
        '& .css-levciy-MuiTablePagination-displayedRows': {
            margin: "0px",

        }

    },
    dataGrid: {
        width: "100%",
        padding: "0px 5px"
    },
    stock:{
        margin:"auto"
    },
    uploadImage: {
        display: "flex",
        justifyContent: "center",
        padding: "60px 0px 0px 0px",
    }
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
        padding: "10px 15px 25px 15px"
    },
    bookCover: {
        display: "flex",
    },
    photoDiv: {
        width: "12%",
        padding: "15px 0px 5px 0px",
        display: "block",
        height: "auto",
        // border:"1px solid red"
    },
    photoHeading: {
        padding: "7px 0px",
        // border:"1px solid green"
    },
    photo: {
        width: "100%",
        height: "auto",
        display: "block",
    },
    uploadImage: {
        width: "88%",
        display: "flex",
        justifyContent: "center",
        padding: "60px 0px 0px 0px",
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.08)',
                borderStyle: "solid",
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