import React, { useState, useEffect, useContext } from 'react'
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
import { clearChat } from '../../redux/actions/index'
import { socket } from '../../socket'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import  {useStylesAdmin} from './style'

function Admin() {
    const {
        roomID,
        setCurrentChat,
        setIsActive,
        selectedSideBarMenu,
        setSelectedSideBarMenu,
        setHomeSideBarActive,
        adminSideBarActive,
        setAdminSideBarActive,
        setProfileSideBarActive,
        anchorElAdmin, setAnchorElAdmin,
        setAnchorElHome,
        setAnchorElProfile,
        subMenuItemActiveState, setSubMenuItemActiveState,
        setNavBarRoute
    } = useContext(Context);
    const dispatch = useDispatch();
    const classes = useStylesAdmin({ anchorElAdmin, adminSideBarActive, subMenuItemActiveState });
    const handleClick = (event) => {
        setAnchorElAdmin((previous) => !previous);
    };
    const handleClose = () => {
        setAnchorElAdmin(false);
    };
    const user = useSelector((state) => state.user_login.details);
    const leaveAllRooms = async (data) => {
        await socket.emit("leave_private_room", {
            roomID: data.roomID,
            userID: data.userID,
        });
    }
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

            <Button style={{ padding: "0px", textTransform: "none", width: "100%" }} onClick={handleClick}>
                <Accordion
                    className={classes.Accordion}
                    expanded={selectedSideBarMenu === 'admin'}
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
                        <AdminPanelSettingsIcon style={{ padding: " 0px 5px", fontSize: "35px" }} />
                        <Typography style={{ padding: "8px 0px" }}>Admin</Typography>
                    </AccordionSummary >
                    <AccordionDetails>
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_1}>
                            <Button className={classes.button_1} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('books')
                                setNavBarRoute("Book Section")
                            }}>
                                <Link className={classes.link_1} to={{
                                    pathname: "/books",
                                }}>
                                    < LibraryBooksOutlinedIcon />
                                    Books
                                </Link>
                            </Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_2} disabled={true}>
                            <Button className={classes.button_2} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('cat')
                            }}>
                                <InventoryOutlinedIcon />
                                Cateogory List
                            </Button>
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple className={classes.menuItem_3} disabled={true}>
                            <Button className={classes.button_3} onClick={() => {
                                dispatch(clearChat());
                                setIsActive(null);
                                setCurrentChat("");
                                leaveAllRooms({ roomID: roomID, userID: user?.user?.id })
                                setSubMenuItemActiveState('author')
                            }}>
                                <PortraitOutlinedIcon />
                                author
                            </Button>
                        </MenuItem>

                    </AccordionDetails>
                </Accordion>
            </Button>

        </div>
    )
}

export default Admin