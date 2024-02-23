import { makeStyles } from "@material-ui/core/styles";



const useStylesRequestBook = makeStyles((theme)=>({
    root: {
        display: "block",
        height: "100%",
        padding: "150px 60px",
        justifyContent: "center",
        overflowWrap: "break-word",
        // border:"1px solid black",
        width:"100%",
        [theme.breakpoints.between('sm', 'md')]: {
            padding: "30px 30px 210px 30px",
        },
        [theme.breakpoints.between('md', 'lg')]: {
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            padding: "30px 60px 210px 60px",
        },
        [theme.breakpoints.up('xl')]: {
            padding: "100px 60px 210px 60px",
  },
    },
    main: {
        height: "auto",
        padding: "0px 7.5px 50px",
        backgroundColor: "#F6F6F6",
        overflowWrap: "break-word",
        width: "100%",
        // border:"1px solid red",
        [theme.breakpoints.between('sm', 'md')]: {
            padding:"0px 7.5px 30px"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding:"0px 7.5px 40px"
        },
        [theme.breakpoints.between('lg', 'xl')]: {
         padding:"0px 7.5px 40px"
        },
        [theme.breakpoints.up('xl')]: {
            padding: "0px 7.5px 50px",
  },
    },
    text: {
        justifyContent: "center",
        overflowWrap: "break-word",
        height: "auto",
        padding: "40px 0px 0px",
        width: "100%", fontSize: "30px",
        textAlign: "center", fontFamily: 'Playfair Display ,serif',fontWeight:"bolder",
        lineHeight: "35px",
        // border:"1px solid green",
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: "13px",
            lineHeight: "25px",
          },
          [theme.breakpoints.between('md', 'lg')]: {
            fontSize: "13px",
            lineHeight: "23px",
          },
          [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: "17px",
            lineHeight: "30px",
           
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: "28px",
            lineHeight: "35px",
    },
},
    request: {
        width: "100%",
        // border:'1px solid blue',
    },
    button_1: {
        fontFamily: "Montserrat, sans-se",
        justifyContent: "center",
        border: "1px solid #d22129",
        width: "100%",
        backgroundColor: "#d22129",
        color: "#ffffff",
        textTransform: 'none',
        padding: "16px 49px",
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: "5px",
        '&:hover': {
            backgroundColor: '#D22129',
        },
        "&.MuiButtonBase-root":{[theme.breakpoints.between('sm', 'md')]: {
            fontSize: "12px",
            height:"28.5px",
            width:"100&"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: "12px",
            height:"38.5px",
            width:"100%"
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: "14px",
         height:"48.5px",
         width: "100%",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "16px",
            height:"58.5px",
            width: "100%",
  },}
        
    }
}))
export { useStylesRequestBook }