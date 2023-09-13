import { makeStyles } from "@material-ui/core/styles";

const useStylesDrawer = makeStyles({
    root: {
        padding: "0px 0px",
    },
    main: {
        backgroundColor: "#ffffff",
        "&.css-7witow-MuiDrawer-docked .MuiDrawer-paper": {
            backgroundColor: "#ffffff",
            padding: "0px 0px",
            border: "2px solid black",
            height: "auto",
        }
    },
    Sidebar_header: {
        backgroundColor: "#d22129",
    },
    libertyBooks_logo: {
        width: "100%"
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
})
export {useStylesDrawer}


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
            padding: "10px 25px",
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
                backgroundColor:"#ffffff",
                color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
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
                color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#333533" : "#333533"),
                fontFamily: "Montserrat, sans-se",
                "&:hover": {
                    color: "#333533",
                    backgroundColor: "#ffffff"
                },
            },
        },
        KeyboardArrowRightIconDiv: {
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
    
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
            transform: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
        },
        home_text: {
            width: "100%",
            height: '34px',
            padding: "2px 130px 0px 0px",
            justifyItems: "start",
        },
        home_page: {
            "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
                color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
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
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'home_page' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
            width: "100%"
        },
        secondItem: {
            "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
                color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
                "&:hover": {
                    color: "#d22129",
                    backgroundColor: "#ffffff"
                },
                padding: "5px 15px"
            },
        },
        button_1: {
            textTransform: 'none',
            padding: "0px 0px",
            width: "100%",
            justifyContent: "start",
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
        },
        link_2: {
            textDecoration: "none",
            display: "flex",
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
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
            color: (props) => (props.anchorElHome && props.homeSideBarActive != null && props.subMenuItemActiveState == 'book_club' ? "#d22129" : "#333533"),
            "&:hover": {
                color: "#d22129",
                backgroundColor: "#ffffff"
            },
        }
    })

    export {useStylesHome}


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
                color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null ? "#d22129" : "#333533"),
                fontFamily: "Montserrat, sans-se",
                width: "100%",
                "&:hover": {
                    color: "#d22129",
                    backgroundColor: "#ffffff"
                },
            }
        },
        KeyboardArrowRightIconDiv: {
            color: (props) => (props.anchorElAdmin && props.adminSideBarActive != null ? "#d22129" : "#333533"),
    
            "&:hover": {
                color: "#d22129",
            },
        },
        KeyboardArrowRightIcon: {
    
            transform: (props) => (props.anchorElAdmin && props.adminSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
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

    export {useStylesAdmin}

    const  useStylesProfile = makeStyles({
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
                color: (props) => (props.anchorElProfile && props.profileSideBarActive != null ? "#d22129" : "#333533"),
                fontFamily: "Montserrat, sans-se",
                width: '100%',
                backgroundColor: "#FFFFFF",
                "&:hover": {
                    color: "#d22129",
                },
            }
        },
        KeyboardArrowRightIconDiv: {
            color: (props) => (props.anchorElProfile && props.profileSideBarActive != null ? "#d22129" : "#333533"),
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

    export {useStylesProfile}
   
    const useStylesRequestBook = makeStyles({
        root: {
          display: "block",
          height: "100%",
          padding: "150px 60px",
          justifyContent: "center",
          overflowWrap: "break-word"
        },
        main: {
          height: "auto",
          padding: "0px 7.5px 50px",
          backgroundColor: "#F6F6F6",
          overflowWrap: "break-word",
          width: "100%"
        },
        text: {
          width: "100%",
          justifyContent: "center",
          overflowWrap: "break-word",
          height: "auto",
          padding:"40px 0px 0px"
        },
        request: {
          width: "100%",
          justifyContent: "center",
          padding: "0px 0px 0px 0px",
          fontFamily: 'Playfair Display ,serif',
          lineHeight: "35px",
          fontSize:"30px"
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
          minWidth:"130px",
          '&:hover': {
            backgroundColor: '#D22129',
          },
        }
      })
      export {useStylesRequestBook}