import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Context from '../../context'
const useStyles = makeStyles({
    profile_button: {
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
            width:'100%',
            backgroundColor: "#FFFFFF",
            color: "#333533",
            "&:hover":{
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        },
    },
    AccordionSummary: {
        "&.MuiAccordionSummary-root": {
            width:'100%',
            backgroundColor: "#FFFFFF",
            color: "#333533",
            "&:hover":{
                color: "#FFFFFF",
                backgroundColor: "#d22129"
            },
        }
    },
    KeyboardArrowRightIconDiv: {
        color: '#333533',
        "&:hover":{
            color: "#FFFFFF",
          
        },
    },
    KeyboardArrowRightIcon: {

        transform: (props) => (props.anchorElProfile && props.profileSideBarActive !=null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    profile_text: {
        width: "100%",
        height: '34px',
        padding: "2px 80px 0px 0px",
    },

})
function Profile() {
    const {
        roomID,
        setRoomID,
        currentChat,
        setCurrentChat,
        isActive,
        setIsActive,
        recepient_status,
        notification_open,
        setNotificationOpen,
        setRecepientId,
        selectedSideBarMenu,
        setSelectedSideBarMenu,
        setHomeSideBarActive,
        setAdminSideBarActive,
       setAnchorElHome,
       setAnchorElAdmin,
       profileSideBarActive,setProfileSideBarActive,
       anchorElProfile, setAnchorElProfile
    } = useContext(Context);
    const classes = useStyles({ anchorElProfile, profileSideBarActive });
    const handleClick = (event) => {
        setAnchorElProfile((previous)=>!previous);
    };
    const handleClose = () => {
        setAnchorElProfile(null);
    };
    const handleChange = (panel) => (event, isSelected) => {
        setSelectedSideBarMenu(isSelected ? panel : null);
        setHomeSideBarActive(null)
        setAdminSideBarActive(null)
        setProfileSideBarActive(panel)
        setAnchorElAdmin(false)
        setAnchorElHome(false)
    };
    return (
        <div>
              <Button style={{padding:"0px",textTransform:"none",width:"100%"}} onClick={handleClick}>
            <Accordion 
            className={classes.Accordion}
            expanded={selectedSideBarMenu === 'profile'}
            onChange={handleChange('profile')}
            >
                {/* <Button
                className={classes.profile_button}
                onClick={handleClick}
            >
                <div className={classes.profile_text}>
                    My profile
                </div>
                <div className={classes. KeyboardArrowRightIconDiv}>
                    <KeyboardArrowRightIcon className={classes.KeyboardArrowRightIcon}/>
                </div>
            </Button> */}
                <AccordionSummary
                    expandIcon={
                      
                        <div className={classes.KeyboardArrowRightIconDiv}>
                         < KeyboardArrowRightIcon className={classes.KeyboardArrowRightIcon} />
                        </div>
                     
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.AccordionSummary}
                >
                    <Typography>My Profile</Typography>
                </AccordionSummary>
                <AccordionDetails>                <MenuItem onClick={handleClose} disableRipple>
                    < LibraryBooksOutlinedIcon />
                    <span>Profile</span>
                </MenuItem>
                </AccordionDetails>

            </Accordion>
            </Button>
        </div>
    )
}

export default Profile