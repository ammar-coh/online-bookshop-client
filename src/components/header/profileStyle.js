import { makeStyles, styled } from "@material-ui/core/styles";

const useStylesProfile = makeStyles((theme) => ({
    root: {
        padding: "0px",
        [theme.breakpoints.between('sm', 'md')]: {
            "& .css-1ge85tx-MuiButtonBase-root-MuiIconButton-root": {
                margin: "auto"
            }
        },
        [theme.breakpoints.between('md', 'lg')]: {
            "& .css-1ge85tx-MuiButtonBase-root-MuiIconButton-root": {
                margin: "auto"
            }
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            "& .css-1ge85tx-MuiButtonBase-root-MuiIconButton-root": {
                margin: 0
            }
        },
        [theme.breakpoints.up('xl')]: {
            "& .css-1ge85tx-MuiButtonBase-root-MuiIconButton-root": {
                margin: 0
            }
        },

    },
    avatar: {
        "&.css-1wlk0hk-MuiAvatar-root": {
            height: "40px",
            width: "40px",
            [theme.breakpoints.between('sm', 'md')]: {
                height: "35px",
                width: "35px",
            },
            [theme.breakpoints.between('md', 'lg')]: {
                height: "40px",
                width: "40px",
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                height: "40px",
                width: "40px",
            },
            [theme.breakpoints.up('xl')]: {
                height: "40px",
                width: "40px",
            },
        },
    },
    logutMenuItem: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            padding: "0px 5px"
        },
    },
    logutButton: {
        width: "100%",
        textTransform: "none",
        justifyContent: "start",
        "&:hover ": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
    },
    logoutIcon: {
        padding: "0px 0px 0px 12px",
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
    },
    logoutText: {
        fontSize: "16px",
    },
    profileMenuItem: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            padding: "0px 5px"
        },
    },
    profielButton: {
        width: "100%",
        textTransform: "none",
        fontSize: "16px",
        justifyContent: "start",
        "&:hover ": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
    },
    link_1: {
        width: "100%",
        display: "flex",
        textDecoration: "none",
        fontSize: "16px",
        fontFamily: "Montserrat, sans-se",
        color: "#333533",
        "&:hover ": {
            color: "#FFFFFF",
            backgroundColor: "#42a5f5"
        },
        borderRadius: "5px"
    }
}))
export { useStylesProfile }