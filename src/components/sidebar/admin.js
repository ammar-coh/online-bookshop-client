import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from '@mui/material/MenuItem';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Context from '../../context'
const useStyles = makeStyles({
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
            width:"100%",
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
            backgroundColor: "#FFFFFF",
            color: "#333533",
            width:"100%",
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

        transform: (props) => (props.anchorElAdmin &&  props.adminbSideBarActive != null ? "rotate(-90deg)" : "rotate(0deg)"),
    },
    admin_text: {
        // border:"1px solid white",
        width: "100%",
        height: '34px',
        padding: "2px 120px 0px 0px",
        justifyItems: "start",
    },
    admin_icon: {
    }
})
function Admin() {
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
        adminbSideBarActive,
        setAdminSideBarActive,
        setProfileSideBarActive,
        anchorElAdmin, setAnchorElAdmin,
        setAnchorElHome,
        setAnchorElProfile
    } = useContext(Context);
  

    const classes = useStyles({ anchorElAdmin, adminbSideBarActive });
    const handleClick = (event) => {
        setAnchorElAdmin((previous)=>!previous);
    };
    const handleClose = () => {
        setAnchorElAdmin(false);
    };
  
    const handleChange = (panel) => (event, isSelected) => {
        setSelectedSideBarMenu(isSelected ? panel : null);
        setHomeSideBarActive(null)
        setAdminSideBarActive(panel)
        setProfileSideBarActive(null)
        setAnchorElHome(false)
        setAnchorElProfile(false)
      };
    return (
        <div>
            {/* <Button
                className={classes.admin_button}
                onClick={handleClick}
            >
                <div className={classes.admin_text}>
                    Admin
                </div>
                <div className={classes.KeyboardArrowRightIconDiv}>
                    <KeyboardArrowRightIcon className={classes.KeyboardArrowRightIcon}/>
                </div>
            </Button> */}
              <Button style={{padding:"0px",textTransform:"none",width:"100%"}} onClick={handleClick}>
            <Accordion  
            className={classes.Accordion}
            expanded={   selectedSideBarMenu === 'admin'}
            onChange={handleChange('admin')}
            >
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
                    <Typography>Admin</Typography>
                </AccordionSummary >
                <AccordionDetails>

                    <MenuItem onClick={handleClose} disableRipple>
                        < LibraryBooksOutlinedIcon />
                        Books
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <InventoryOutlinedIcon />
                        Cateogory List
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                        <PortraitOutlinedIcon />
                        author
                    </MenuItem>

                </AccordionDetails>
            </Accordion>
            </Button>

        </div>
    )
}

export default Admin