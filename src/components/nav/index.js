import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Grid } from "@mui/material";
import Header from "../header/index";
import Home from '../sidebar/home';
import Admin from '../sidebar/admin'
import Requestbook from '../sidebar/requestbook'
import ListItemButton from '@mui/material/ListItemButton';
import ProfileSide from '../sidebar/Profile';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoofingIcon from '@mui/icons-material/Roofing';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Route, Switch } from "react-router-dom";
import checkout from "../../checkout";
import AddProduct from "../../addProduct";
import Chatroom from "../chat/index"
import Profile from '../profile/index'
import Books from '../books/index';
import ItemContainer from "../home/ItemContainer"
import Banner from '../home/banner';
import { useSelector, useDispatch } from "react-redux";
import libertyBookslogo from '../../Assets/newlogoliberty-250x67 (1)-250x67.png'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    "& .MuiPaper-root":{
      border:'none'
    },
    
  
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#d22129",
    display: 'flex',
    height: '64.5px',
    boxShadow:'none',
    [theme.breakpoints.up('xs')]: {
      height: '100px',
      '& .MuiToolbar-root': {
        paddingLeft: '10px',
        paddingRight: '0px',
        // height:'64.5px',
      }
    },
    [theme.breakpoints.up('lg')]: {
      height: '65px'
    },
    [theme.breakpoints.up('sm')]: {
      height: '64.5px',
      '& .MuiToolbar-root': {
        paddingLeft: '14px',
        paddingRight: '14px',
        height: '64.5px',
      }
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      '& .MuiToolbar-root': {
        padding: 0
      }
    },
  },
  item: {
    display: "flex",
    padding: "50px",
    flexWrap: "wrap",
    gap: "31px",
    zIndex: 2,
    width: "100%",
    padding: "50px 0px 50px 0px",
// border:'1px solid red',


    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
      gap: "50px",
      padding: "50px 0px 50px 0px",
    },
    [theme.breakpoints.up('md')]: {
      width: "100%",
      padding: "50px 0px 50px 0px",

    },
    [theme.breakpoints.up('lg')]: {
      width: "100%",
      gap: "15px",
      padding: "50px 0px 50px 0px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
      padding: "50px 0px 50px 0px",
      gap: "30px",

    },

    marginLeft: "auto"
  },
  body: {
    minHeight: "300px", // Ensure enough height for content to render
    [theme.breakpoints.between('sm', 'md')]: {
      width: "100%",
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
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    ...theme.mixins.toolbar, // Inherit default toolbar styles
    height: "64.5px", // Default height
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down("xs")]: {
      height: "100px",

    },
  },
  drawerPaper: {
    width: drawerWidth,

    '& .MuiListItem-root': {
      // border: "1px solid red",
      padding: '0px 0px 0px 10px'
    },
    overflowY: "auto",// Enable scrolling
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
      backgroundColor: theme.palette.mode === "dark" ? "#262626" : "#F2F2F2",
        display: "none"
    },
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: "10px",
      backgroundColor: theme.palette.mode === "dark" ? "#262626" : "#F2F2F2",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: theme.palette.mode === "dark" ? "#262626" : "#F2F2F2",
    },
  },
  content: {
    width: '50%',
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  img:{
    width:'100%',
    [theme.breakpoints.between('xs', 'sm')]: {
        width: "100%",
        // height:"80px"

    },
    // [theme.breakpoints.between('md', 'lg')]: {
    //     width: "250px",
    //     // height:"67px"
    // },
    // [theme.breakpoints.between('lg', 'xl')]: {
    //    width:"250px",
    // // height:"67px"
    // },
    // [theme.breakpoints.up('xl')]: {
    //     width: "100%"
    // },
},
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const user = useSelector((state) => state.user_login.details);
  const details = useSelector((state) => state.books.details);

  const iconsArray = [<RoofingIcon />, <AdminPanelSettingsOutlinedIcon />, <PersonOutlinedIcon />]

  const drawer = (
    <Box>
      <div className={classes.toolbar} style={{
    position: "sticky",
    top: 0,
    backgroundColor: "#d22129",
    zIndex: 1100,
}}><img src={libertyBookslogo} 
      className={classes.img}
      /></div>
      {/* <Box sx={{
        // border:'1px solid red'
        }}>Ammar</Box> */}
      <Divider />
      <List
        sx={{
          // border: "1px solid red",
          "&.MuiListItem-root": {
            border: "1px solid red",
          },
        }}
      >
        {[<Home />, <Admin />, <ProfileSide />, <Requestbook />].map(
          (text, index, array) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  border: "3px solid red",
                }}
              >
                <ListItemText
                  sx={{
                    border: "1px solid red",
                  }}
                  primary={text}
                />
              </ListItem>
              {index !== array.length - 1 && <Divider />} {/* Divider after every item except the last one */}
            </React.Fragment>
          )
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Box sx={{
            '& .MuiButtonBase-root': {
              // border: '1px solid #FFF',
              marginBottom: { xs: '20px', sm: '0px' }
            },

            display: 'flex',
            alignItems: { xs: 'start', sm: 'center' },
            // border: '1px solid #fff',
            paddingBottom: "0px 0px 10px 0px "
          }} display='flex'
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box style={{ width: '100%' }}>
            <Header />
          </Box>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden xsDown implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/products/add" exact component={AddProduct} />
          <Route path="/checkout" exact component={checkout} />
          <Route path="/book club" exact component={Chatroom} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/books" exact component={Books} />
          {/* <Route path="/create group" exact component={CreateGroup} />
                    <Route path="/book page" exact component={BookPage} /> */}
          <div
            className={classes.body}
          >
            <div>
              <Banner />
            </div>
            <div className={classes.item}>
              <Grid container spacing={2}>
                {details.length > 0 &&
                  details.map((i) => (
                    <Grid item xs={12} sm={12} 
                    md={6} 
                    lg={4} 
                    xl={3}key={i._id}>
                      <ItemContainer
                        image={i?.image}
                        price={i.price}
                        year={i.year}
                        id={i._id}
                        rating={i.rating}
                        author={i?.author}
                        title={i?.title}
                        description={i?.description}
                      />
                    </Grid>
                  ))}
              </Grid>
            </div>



          </div>
        </Switch>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;









