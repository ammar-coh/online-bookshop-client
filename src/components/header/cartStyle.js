import { makeStyles, styled } from "@material-ui/core/styles";


const useStylesCart = makeStyles((theme)=>({
    root: {
      // border: " 1px solid orange",
        display: "flex",
        // justifyContent: "start",
        alignItems:'center',
        padding: "0px 0px 10px 0px",
        // width: "100%",
        // padding: "0px 0px 19px 0px",
        [theme.breakpoints.between('sm', 'md')]: {
          padding: "0px 0px 0px 0px",
        },
        [theme.breakpoints.between('md', 'lg')]: {
          padding: "0px 0px 10px 0px",
        },
        // [theme.breakpoints.between('lg', 'xl')]: {
        //   padding: "0px 0px 19px 0px",
        // },
        // [theme.breakpoints.up('xl')]: {
        //   padding: "0px 0px 19px 0px",
        // },
        // border: "none",
        "&:hover": {
          border: " none",
        },
      },
    
      icon: {
        color: "#fff",
        marginLeft: "0px",
        marginTop: "10px",
        
        [theme.breakpoints.between('sm', 'md')]: {
          marginTop: "0px",
        },
        [theme.breakpoints.between('md', 'lg')]: {
          marginTop: "10px",
        },
        [theme.breakpoints.between('lg', 'xl')]: {
          marginTop: "10px",
        },
        [theme.breakpoints.up('xl')]: {
          marginTop: "10px",
        },
    
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
        // border:"1px solid blue"
      },
      cartIcon:{
        "&.MuiSvgIcon-root":{
          [theme.breakpoints.between('xs','sm')]: {
            fontSize: "18px",
          },
           [theme.breakpoints.between('sm', 'md')]: {
            fontSize:"18px"
        },
        [theme.breakpoints.between('md', 'lg')]: {
          fontSize:"20px"
        },
        [theme.breakpoints.between('lg', 'xl')]: {
          fontSize:"20px"
        },
        [theme.breakpoints.up('xl')]: {
         fontSize:"20px"
        },},
       
      },
      cartContainerButton: {
        // border:"1px solid #fff",
        width: "100%",
        "&.MuiButtonBase-root":{
          padding: "0px 0px 0px 30px",
          justifyContent: "start",
          [theme.breakpoints.between('sm', 'md')]: {
            minWidth: "100%",
            justifyContent: "center",
            padding: "1px 0px 1px 0px",
         
          },
          [theme.breakpoints.between('md', 'lg')]: {
            minWidth: "100%",
            justifyContent: "start",
            padding: "0px 0px 0px 0px",
          },
          [theme.breakpoints.between('lg', 'xl')]: {
            minWidth: "100%",
            justifyContent: "start",
            padding: "0px 0px 0px 10px",
          },
          [theme.breakpoints.up('xl')]: {
            backgroundColor: 'transparent',
            width: "100%",
            padding: "0px 0px 0px 30px",
      
          },
        },
       
      }
  }));
  export { useStylesCart }