import { makeStyles } from "@material-ui/core/styles";


const useStylesIndex = makeStyles({
    login_container: {
        fontFamily: 'Numans sans-serif',
        height: "100vh",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
    },
    root: {
        width: "450px",
        backgroundColor: "#ffffff",
        borderWidth: 0,
        boxShadow: "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
        height: "370px",
        marginTop: "auto",
        marginBottom: "auto",
        borderRadius: "4px",
    },
    container_header: {
        position: "relative",
        padding: "20px 20px 20px 20px"
    },
    container_header_signIn: {
        color: "#333533",
        fontSize: "28px !important",
        fontFamily: 'Numans sans-serif',
        margin: "0px 0px"
    },
    container_header_social_icon: {
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        right: "30px",
        top: "15px",

    },
    social_icon_span_twitter: {
        marginLeft: "10px",
        color: "rgb(29, 155, 240)",
    },
    social_icon_span_facebook: {
        marginLeft: "10px",
        color: "#1877f2",

    },
    social_icon_span_instagram: {
        marginLeft: "10px",
        color: "#fff",
        borderRadius: "0.3em",
        background: "#d6249f",
        background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        "&:hover": {
            color: "#d22129",
            background: "#ffffff",
            cursor: "pointer"
        }
    },
    sm_icons: {
        fontSize: "45px !important",
        "&:hover": {
            color: "#d22129",
            cursor: "pointer"
        }
    },
    form: { padding: "20px" },
    input_group: {
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        alignItems: "stretch",
        width: "100%",
        margin: "0px 0px 20px 0px",
    },
    input_pre_icon: {
        width: "50px",
        backgroundColor: "#d22129",
        color: "#ffffff",
        border: "0 !important",
        display: "flex",
        justifyContent: "center",
        padding: "5px 0px 0px 0px !important",
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px'
    },
    input_icon: {
        backgroundColor: "#d22129",
        color: "#ffffff",
        border: "0 !important",
        fontSize: "20px"
    },
    email: {
        width: "86%",// Adjust the height value as per your requirement
        borderTopLeftRadius: "20px",
        '& .MuiInputBase-root': {
            height: '36px',
            backgroundColor: "white",
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            outline: "0 0 0 0  !important",
            boxShadow: "0 0 0 0 !important",
        },
        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "5px 4px"
        }
    },
    input_checkbox: {
        display: "flex",
        justifyContent: "flex-start",

        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-disabled": {
            color: "#ffffff",
            width: "20px",
            height: "20px",
            marginLeft: "0px",
            marginRight: "5px",
        },
    },
    checkbox: {
        color: "green"

    },
    remember: {
        color: "#FFFFFF",
        fontSize: "16px",
        padding: "2px 0px"
    },
    signInButton_container: {
        display: "flex",
        justifyContent: "flex-end"
    },
    signInButton: {
        width: "100px",
        height: "40px",
        backgroundColor: "#d22129",
        color: "#ffffff",
        cursor: "pointer",
        padding: "6px 12px",
        fontSize: "16px !important",
        fontFamily: ' sans-serif',
        textTransform: 'capitalize',
        "&:hover": {
            color: "#ffffff",
            backgroundColor: "#333533"
        }

    },
    footer: {
        padding: "12px 20px"
    },
    signUpButton_container: {
        display: "flex",
        justifyContent: "center"
    },
    spanOneSignUpbutton: {
        color: "#000000"
    },
    spanSigTwonUpbutton: {
        padding: "0px 0px 0px 7px"
    },
    link_signup: {
        textDecoration: "none",
        color: "#007bff"
    },
    error_message: {
        color: "#d22129",
        margin: "0px",
        '&::before': {
            content: '"⚠ "',
            display: 'inline',
            color: "#d22129",
        },
    }
});

export {useStylesIndex}