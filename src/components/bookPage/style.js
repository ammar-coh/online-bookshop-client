import { makeStyles } from "@material-ui/core/styles";
const useStylesIndex = makeStyles({
    box: {
        padding: "150px"
    },
    main: {
        width: "100%",
        display: "flex",
    },
    imageDiv: {
        display:"block",
        width: "18%"
    },
    image: {
        width: "219px",
        height: "340px"
    },
    bookInformation: {
        width: "88%"
    },
    title: {
        padding: "15px"
    },
    author:{
        padding:"15px"
    },
    rating:{
        padding:'15px 0px 0px 10px '
    },
    price:{
        padding:"15px"
    },
    description:{
        padding:"15px 15px 25px 15px",
        width:"50%",
        height:"300px",
        whiteSpace: "normal",
        wordBreak:"break-all",
        overflow:"hidden",
        display: "-webkit-box",
        textAlign: "left",
        margin: "0px",
        textOverflow:"ellipsis",
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        fontSize: "13px",
        fontFamily: "Montserrat, sans-se",
    },
    addButton:{
        display:"flex",
        padding:"140px 15px 0px 15px",
        width:"100%",
    },
    cart: {
   
        backgroundColor: "#d22129",
        padding:"15px",
        color: "#ffffff",
        fontSize: "10px",
        zIndex: 1,
        "&:hover": {
            color: "black",
            backgroundColor: "white"
        },
        padding: "7px 5px",
        width:"200px"
    },
});
export { useStylesIndex }