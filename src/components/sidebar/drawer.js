import React, { useEffect, useContext, useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import libertyBookslogo from '../../Assets/newlogoliberty-250x67 (1)-250x67.png'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Home from './home';
import Admin from './admin'
import Profile from './Profile';
import Context from '../../context'
import RoofingIcon from '@mui/icons-material/Roofing';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


const drawerWidth = 240;
const useStyles = makeStyles({
    root: {

    },
    main: {
        backgroundColor: "#d22129",

    },

    Sidebar_header: {
        backgroundColor: "#d22129",

    },
    libertyBooks_logo: {
        width: "100%"
    },
    sidebar_menu_list: {
        backgroundColor: "#d22129",
    },
    listIcons: {
        padding: "0px",
        "& .css-1m5i5w0-MuiButtonBase-root-MuiListItemButton-root": {
            padding: "0px"
        }

    }



})
const openedMixin = (theme) => ({
    width: "20%",
    backgroundColor: "#d22129",
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
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
        sideBarCollapsed,
        setSideBarCollapsed
    } = useContext(Context);

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const iconsArray = [<RoofingIcon />, <AdminPanelSettingsOutlinedIcon />, <PersonOutlinedIcon />]
    const handleDrawerOpen = () => {
        setOpen((previous) => !previous);
        setSideBarCollapsed((previous) => !previous)
    };


    return (
        <Box sx={{ display: 'flex' }}>
          

            <Drawer className={classes.main} variant="permanent" open={open}>
                <DrawerHeader className={classes.Sidebar_header}>
                    {!sideBarCollapsed ? null : <div className={classes.libertyBooks_logo}>
                        <img src={libertyBookslogo} />
                    </div>}
                    <IconButton onClick={handleDrawerOpen}>
                        {!sideBarCollapsed ?
                            <ChevronRightIcon style={{ color: "white", backgroundColor: "#333533", borderRadius: "50px" }} />
                            : <ChevronLeftIcon style={{ "color": "white" }}
                            />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List className={classes.sidebar_menu_list}>
                    {[<Home />, <Admin />, <Profile />].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>

                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >

                                <ListItemIcon
                                    className={classes.listIcons}
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index === 0 ? < RoofingIcon style={{ "color": "white" }} /> : index === 1 ? <AdminPanelSettingsOutlinedIcon style={{ "color": "white" }} /> : index === 2 ? <PersonOutlinedIcon style={{ "color": "white" }} /> : null}
                                </ListItemIcon>


                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

        </Box>
    );
}