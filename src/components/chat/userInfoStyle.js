import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gap: "50px 0px",
        zIndex: 1,
        // border: "1px solid red",
        [theme.breakpoints.between('sm', 'md')]: {
            height:props=>(props.roomActive?"38px":"38px")
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: props=>(props.roomActive?"38px":"30px")
           
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height : props=>(props.roomActive?"48px":"36px")
        },
        [theme.breakpoints.up('xl')]: {
        
            height : props=>(props.roomActive?"48px":"36px")
        },

    },

    userInfo: {
        zIndex: 1,
        display: "flex",
        padding: "10px",
        gap: "15px",
        [theme.breakpoints.between('sm', 'md')]: {
            padding: "1px 5px 5px 5px",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: "0px 5px 5px 5px",
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            padding: "0px 5px 5px 5px",
        },
        [theme.breakpoints.up('xl')]: {
            padding: "0px 5px 5px 5px",
        },
    },
    userAvatar: {
        zIndex: 1,
        //   border:"1px solid blue",
        "& .css-1tluy43-MuiAvatar-root": {
            color: "#ffffff",
            backgroundColor: "#333533",
            [theme.breakpoints.between('sm', 'md')]: {

            },
            [theme.breakpoints.between('md', 'lg')]: {

            },
            [theme.breakpoints.between('lg', 'xl')]: {

            },
            [theme.breakpoints.up('xl')]: {

            },
        }
    },
    avatar: {
        "&.css-1ha55yc-MuiAvatar-root": {
            [theme.breakpoints.between('sm', 'md')]: {
                height: "30px",
                width: "30px"
            },
            [theme.breakpoints.between('md', 'lg')]: {
                height: "35px",
                width: "35px"
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                height: "40px",
                width: "40px"
            },
            [theme.breakpoints.up('xl')]: {
                height: "40px",
                width: "40px"
            },
        },
    },
    userName: {
        width: "100%",
        // color: "#41525d",
        // border: "1px solid green",
        color: "#333533",
        fontFamily: "Montserrat, sans-se",
        fonySize: "16px",
        zIndex: 1,
        padding: "10px 0px 0px 0px",
        [theme.breakpoints.between('sm', 'md')]: {
            height: "32px",
            padding: "7px 0px 0px 0px",
        },
        [theme.breakpoints.between('md', 'lg')]: {

        },
        [theme.breakpoints.between('lg', 'xl')]: {

        },
        [theme.breakpoints.up('xl')]: {

        },
    },
    welcomeMessage: {
        display: "flex",
        justifyContent: "center",
        padding: " 0px 10px 25px 10px",
       
    },
    welcomeMessageText: {
        fontFamily: "Montserrat, sans-se",
        fontSize: "20px",
        color: "#333533"
    }
}))


export { useStyles }