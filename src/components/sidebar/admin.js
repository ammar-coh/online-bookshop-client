import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
    KeyboardArrowDownIcon: {
        display:"flex",
         width:"100%",
       justifyContent:"end",
    },
    admin_text: {
        // border:"1px solid white",
        width:"100%",
        height:'34px',
        padding: "2px 120px 0px 0px",
        justifyItems: "start",
    },
    admin_icon:{
    }
})
function Admin() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                className={classes.admin_button}
                onClick={handleClick}
            >
                <div className={classes.admin_text}>
                    Admin
                </div>
                <div className={classes.KeyboardArrowDownIcon}>
                    <KeyboardArrowDownIcon />
                </div>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
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
            </Menu>
        </div>
    )
}

export default Admin