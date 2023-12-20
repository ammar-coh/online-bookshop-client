import { makeStyles, styled } from "@material-ui/core/styles";


const useStylesCart = makeStyles((theme)=>({
    root: {
        display: "flex",
        justifyContent: "start",
        top: "0px",
        width: "100%",
        padding: "0px 0px 19px 0px",
        border: "none",
        "&:hover": {
          border: " none",
        },
      },
    
      icon: {
        color: "#fff",
        marginLeft: "0px",
        marginTop: "10px",
    
      },
      count: {
        marginTop: "0px",
        color: "#fff",
        textDecoration: "none",
        margin: "0px",
    
        width: "5px",
        padding: "10px",
      },
      checkout_link: {
        textDecoration: "none",
        color: "#fff",
      },
  }));
  export { useStylesCart }