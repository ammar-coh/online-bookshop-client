import React from "react";
import CheckoutContainer from "./CheckoutContainer";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Subtotal from "./Subtotal";
import { 
  Paper, 
  Typography, 
  IconButton, 
  Grid,
  Drawer,
  Divider,
  Button
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { removeFromCartSaga } from './redux/actions'; // Make sure this path is correct

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  drawerPaper: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  cartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderBottom: '1px solid #dee2e6',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
    },
  },
  closeButton: {
    color: '#dc3545',
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    [theme.breakpoints.down('xs')]: {
      padding: '6px 12px',
      fontSize: '0.875rem',
    },
    '&:hover': {
      backgroundColor: '#c82333',
    },
  },
  headerTitle: {
    color: '#000',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
  },
  content: {
    padding: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  itemsList: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
  totalSection: {
    padding: theme.spacing(2),
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
  },
  checkoutTotal: {
    marginTop: theme.spacing(2),
  },
  orderSummary: {
    marginBottom: theme.spacing(2),
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    '& .MuiTypography-root': {
      fontWeight: 400,
    }
  },
  summaryContainer: {
    padding: theme.spacing(2),
  },
  summaryTitle: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: theme.spacing(2),
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  },
  checkoutButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    width: '100%',
    marginTop: 'auto',
    padding: '12px',
    borderRadius: '4px',
    boxShadow: 'none',
    position: 'sticky',
    bottom: 0,
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
      fontSize: '0.9rem',
    },
    '&:hover': {
      backgroundColor: '#c82333',
      boxShadow: 'none',
    },
  },
  totalAmount: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

function Checkout({ open, onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.checkout);

 

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log('Proceeding to checkout');
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.cartHeader}>
        <Typography variant="h6" className={classes.headerTitle}>
          Shopping cart
        </Typography>
        <Button 
          variant="contained"
          className={classes.closeButton}
          onClick={onClose}
        >
          Close cart
        </Button>
      </div>
      
      <div className={classes.content}>
        <div className={classes.itemsList}>
          {counts.products && counts.products.length > 0 ? (
            counts.products.map((item) => (
              <CheckoutContainer
                key={item._id}
                image={item.image}
                price={item.price}
                id={item._id}
                quantity={item.qty}
                title={item.title || 'Book Title'}
              />
            ))
          ) : (
            <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
              Your cart is empty
            </Typography>
          )}
        </div>

        {counts.products && counts.products.length > 0 && (
          <Button 
            variant="contained" 
            className={classes.checkoutButton}
            onClick={handleCheckout}
            fullWidth
          >
            Checkout Total Amount: Rs {counts.total || 0}/-
          </Button>
        )}
      </div>
    </Drawer>
  );
}

export default Checkout;

// typeof(counts) == "number"?<CheckoutContainer dis = {dispatch(getProductsToCartSaga())}/>:
