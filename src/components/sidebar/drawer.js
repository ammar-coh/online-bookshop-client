import React, { useContext } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import libertyBookslogo from '../../Assets/newlogoliberty-250x67 (1)-250x67.png'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Home from './home';
import Admin from './admin'
import Profile from './Profile';
import RoofingIcon from '@mui/icons-material/Roofing';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useStylesDrawer} from './style'
import Requestbook from './requestbook'
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: "20%",
    height: "auto",
    backgroundColor: "#ffffff",
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
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

export default function SideBar() {
    const classes = useStylesDrawer();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const iconsArray = [<RoofingIcon />, <AdminPanelSettingsOutlinedIcon />, <PersonOutlinedIcon />]
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer className={classes.main} variant="permanent" open >
                <DrawerHeader className={classes.Sidebar_header}>
                    <div className={classes.libertyBooks_logo}>
                        <img src={libertyBookslogo} />
                    </div>
                </DrawerHeader>
                <Divider />
                <List className={classes.sidebar_menu_list}>
                    {[<Home />, <Admin />, <Profile />, <Requestbook />].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>

                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}