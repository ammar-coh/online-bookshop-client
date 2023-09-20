import { makeStyles } from "@material-ui/core/styles";

const useStylesIndex = makeStyles({
    addBooKButtonDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
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
    tableMain:{
        // border:"1px solid black",
        padding:"10px 30px 10px 30px",
        height:"100%"
    }
});
export { useStylesIndex }

const useStylesTable = makeStyles({
    addBooKButtonDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
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
    tableMain:{
        // border:"1px solid black",
        padding:"10px 30px 10px 30px",
        height:"100%"
    },
    price:{
        padding:"0px 30px 0px 30px"
    },

});
export { useStylesTable }