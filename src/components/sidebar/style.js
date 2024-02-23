import { makeStyles } from "@material-ui/core/styles";

const useStylesDrawer = makeStyles((theme)=>({
    header:{
          // border:"1px solid green",
        minHeight:"0px !important",
            [theme.breakpoints.between('sm', 'md')]: {
                height:"51.5px",
            },
            [theme.breakpoints.between('md', 'lg')]: {
                height:"66.55px",
                minHeight:"0px !important",
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                height:"67px",
                minHeight:"0px !important",
            },
            [theme.breakpoints.up('xl')]: {
                height:"67px",
                minHeight:"0px !important",
           
            },
        
         
    },
    libertyBooks_logo: {
        // border:"1px solid green",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "100%",
            // border:"1px solid green"4
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "100%",
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: "100%",
        },
        [theme.breakpoints.up('xl')]: {
            width: "100%",
       
        },
       
    },
    img:{
        [theme.breakpoints.between('sm', 'md')]: {
            width: "180px",
            // height:"67px"

        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "250px",
            // height:"67px"
        },
        [theme.breakpoints.between('lg', 'xl')]: {
           width:"250px",
        // height:"67px"
        },
        [theme.breakpoints.up('xl')]: {
            width: "250px"
        },
    },

    sidebar_menu_list: {
        backgroundColor: "#ffffff",
        padding: "0px 0px",
        "& .css-1m5i5w0-MuiButtonBase-root-MuiListItemButton-root": {
            padding: "0px",
        }
    },
    listIcons: {
        padding: "0px",
        "& .css-1m5i5w0-MuiButtonBase-root-MuiListItemButton-root": {
            padding: "0px"
        }
    }
}))
export { useStylesDrawer }


const useStylesHome = makeStyles({
    home_button: {
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#d22129"
        },
        "& .MuiButton-text": {
            padding: "6px 0px",
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
        "& .MuiButton-label": {
            fontFamily: "Montserrat, sans-se",
            color: "#fff",
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
    },
    homeMenu: {
        display: "none",
        transform: "none",
        transitionTimingFunction: "ease-in-out",
        transition: "0.3s",
    },
    homeMenu2: {
        display: "block",
        backgroundColor: "red",
        transform: (props) => (props.anchorEl ? "translateY(20%)" : "translateY(10%)"),
        transition: "0.25s",
        transitionTimingFnction: "ease-out",
        transform: "translateY(10%)",
        opacity: 1
    },
    icon: {
        fontSize: "20px",
        color: "#333533",
        width: "20%",
        border: "1px solid black"
    },
    Accordion: {
        padding: "5px 25px",
        width: "100%",
        "&.MuiAccordion-root": {
            backgroundColor: "#FFFFFF",
            color: "#333533",
            fontFamily: "Montserrat, sans-se",
            boxShadow: "none"
        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            width: "100%",
            backgroundColor: "#ffffff",
            color: (props) => (props.activeSideBar == 'home_page'
                || props.activeSideBar == 'create_group'
                || props.activeSideBar == 'chat_menu' ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#FFFFFF"
            },
        },
    },
    AccordionDetails: {
        "&.MuiAccordionDetails-root": {
            width: "100%",
            backgroundColor: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#ffffff" : "#ffffff"),
            color: (props) => (props.activeSideBar == 'home_page'
                || props.activeSideBar == 'create_group'
                || props.activeSideBar == 'chat_menu' ? "#333533" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            "&:hover": {
                color: "#333533",
                backgroundColor: "#ffffff"
            },
        },
    },
    KeyboardArrowRightIconDiv: {
        color: (props) => (props.activeSideBar == 'home_page'
            || props.activeSideBar == 'create_group'
            || props.activeSideBar == 'chat_menu' ? "#d22129" : "#333533"),

        "&:hover": {
            color: "#d22129",
        },
    },
    KeyboardArrowRightIcon: {
        "&:hover": {
            color: "#d22129",
        },
        "&.MuiAccordion-region": {
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
        transform: (props) => (props.anchorElHome
            && props.homeSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    home_text: {
        width: "100%",
        height: '34px',
        padding: "2px 130px 0px 0px",
        justifyItems: "start",
    },
    home_page: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.activeSideBar == 'home_page' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    home_link: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.activeSideBar == 'home_page' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    secondItem: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.activeSideBar == 'create_group'
                || props.activeSideBar == 'chat_menu' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "0px 0px"
        },
    },
    button_1: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.activeSideBar == 'home_page' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    link_2: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElHome
            && props.homeSideBarActive != null
            && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    button_2: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElHome
            && props.homeSideBarActive != null
            && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    AccordionBookClub: {
        padding: "0px 0px",
        width: "100%",
        "&.MuiAccordion-root": {
            backgroundColor: "#FFFFFF",
            color: "#333533",
            fontFamily: "Montserrat, sans-se",
            boxShadow: "none"
        },
        // border: "1px solid black"
    },
    AccordionDetailsBookClub: {
        // border: "1px solid green",
        "&.MuiAccordionDetails-root": {
            width: "100%",
            backgroundColor: (props) => (props.anchorElHome
                && props.homeSideBarActive != null
                && props.subMenuItemActiveState == 'book_club'
                && props.selectedSideBarMenuHome != null ? "#ffffff" : "#ffffff"),
            color: (props) => (props.anchorElHome
                && props.homeSideBarActive != null
                && props.subMenuItemActiveState == 'book_club'
                && props.selectedSideBarMenuHome != null ? "#333533" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            "&:hover": {
                color: "#333533",
                backgroundColor: "#ffffff"
            },
        },
    },
    AccordionSummaryBookClub: {
        "&.MuiAccordionSummary-root": {
            width: "100%",
            backgroundColor: "#ffffff",
            color: (props) => (props.activeSideBar == "create_group"
                || props.activeSideBar == "chat_menu" ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#FFFFFF"
            },
        },
        "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
            margin: "0px"
        }
    },
    KeyboardArrowRightIconDivBookClub: {
        color: (props) => (props.activeSideBar == "create_group"
            || props.activeSideBar == "chat_menu" ? "#d22129" : "#333533"),

        "&:hover": {
            color: "#d22129",
        },
    },
    KeyboardArrowRightIconBookClub: {
        "&:hover": {
            color: "#d22129",
        },
        "&.MuiAccordion-region": {
            "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
        transform: (props) => (props.anchorElHome
            && props.homeSideBarActive != null
            && props.subMenuItemActiveState == 'book_club'
            && props.selectedSideBarMenuHome != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    menuItemIcon: {
        padding: "5px 0px 0px 0px "
    },
    menuItemText: {
        padding: "0px 0px 0px 10px "
    },
    subMenuItemCreateGroup: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color:
                (props) => (
                    props.activeSideBar == "create_group"? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px 5px 15px",
            // border: "1px solid black",
        },
    },
    buttonCreateGroup: {
        textTransform: 'none',
        padding: "0px 25px",
        width: "100%",
        justifyContent: "start",
        // border:"1px solid red",
        color: (props) => (props.activeSideBar == "create_group"? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    link_CreateGroup: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.activeSideBar == "create_group" ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    subMenuItemChatMenu: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color:
                (props) => (props.activeSideBar == "chat_menu"  ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px 5px 15px",
            // border: "1px solid black",
        },
    },
    buttonChatMenu: {
        textTransform: 'none',
        padding: "0px 25px",
        width: "100%",
        justifyContent: "start",
        // border:"1px solid red",
        color: (props) => (props.activeSideBar == "chat_menu" ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    link_ChatMenu: {
        textDecoration: "none",
        display: "flex",
        color: (props) =>(props.activeSideBar == "chat_menu"  ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    }
})

export { useStylesHome }


const useStylesAdmin = makeStyles({
    admin_button: {
        textTransform: 'none',
        backgroundColor: "transparent",
        width: "100%",
        justifyContent: "start",
        "& .MuiButton-text": {
            padding: "6px 0px"
        },
        "& .MuiButton-label": {
            fontFamily: "Montserrat, sans-se",
            color: "#fff",
        },
    },
    Accordion: {
        "&.MuiAccordion-root": {
            width: "100%",
            backgroundColor: "#FFFFFF",
            color: "#333533",
            padding: "10px 25px",
            boxShadow: "none"
        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            backgroundColor: "#FFFFFF",
            color: (props) => (props.activeSideBar == 'books'
                || props.activeSideBar == 'cat'
                || props.activeSideBar == 'author' ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            width: "100%",
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
        }
    },
    KeyboardArrowRightIconDiv: {
        color: (props) => (props.activeSideBar == 'books'
            || props.activeSideBar == 'cat'
            || props.activeSideBar == 'author' ? "#d22129" : "#333533"),

        "&:hover": {
            color: "#d22129",
        },
    },
    KeyboardArrowRightIcon: {

        transform: (props) => (props.anchorElAdmin
            && props.adminSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    button_1: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'books' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_1: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'books' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    button_2: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'cat' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_2: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'cat' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    button_3: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'author' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_3: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'author' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    admin_text: {
        // border:"1px solid white",
        width: "100%",
        height: '34px',
        padding: "2px 120px 0px 0px",
        justifyItems: "start",
    },
    link_1: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'books' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    link_2: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'cat' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    link_3: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null && props.subMenuItemActiveState == 'author' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    admin_icon: {
    }
})

export { useStylesAdmin }

const useStylesProfile = makeStyles({
    Accordion: {
        "&.MuiAccordion-root": {
            width: '100%',
            backgroundColor: "#FFFFFF",
            color: "#333533",
            padding: "10px 25px",
            boxShadow: "none"
        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            color: (props) => (props.activeSideBar == 'profile' ? "#d22129" : "#333533"),
            fontFamily: "Montserrat, sans-se",
            width: '100%',
            backgroundColor: "#FFFFFF",
            "&:hover": {
                color: "#d22129",
            },
        }
    },
    KeyboardArrowRightIconDiv: {
        color: (props) => (props.activeSideBar == 'profile' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#FFFFFF",

        },
    },
    KeyboardArrowRightIcon: {

        transform: (props) => (props.anchorElProfile && props.profileSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    button_1: {
        textTransform: 'none',
        padding: "0px 0px",
        width: "100%",
        justifyContent: "start",
        color: (props) => (props.anchorElProfile && props.ProfileSideBarActive != null && props.subMenuItemActiveState == 'profile' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
    },
    menuItem_1: {
        "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
            color: (props) => (props.anchorElProfile && props.profileSideBarActive != null && props.subMenuItemActiveState == 'profile' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            padding: "5px 15px"
        },
    },
    link_1: {
        textDecoration: "none",
        display: "flex",
        color: (props) => (props.anchorElProfile && props.profileSideBarActive != null && props.subMenuItemActiveState == 'profile' ? "#d22129" : "#333533"),
        "&:hover": {
            color: "#d22129",
            backgroundColor: "#ffffff"
        },
        width: "100%"
    },
    profile_text: {
        width: "100%",
        height: '34px',
        padding: "2px 80px 0px 0px",
    },
})

export { useStylesProfile }

