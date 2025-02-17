import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, IconButton, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch,useSelector } from 'react-redux';
import { removeFromCartSaga } from './redux/actions';

const useStyles = makeStyles((theme) => ({
  cartItem: {
    display: 'flex',
    padding: theme.spacing(2),
    borderBottom: '1px solid #eee',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  itemImage: {
    width: 80,
    height: 100,
    objectFit: 'cover',
    marginRight: theme.spacing(2),
  },
  itemDetails: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemInfo: {
    flex: 1,
  },
  priceInfo: {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  quantity: {
    color: '#666',
    marginTop: theme.spacing(1),
  },
  price: {
    color: '#dc3545',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  removeButton: {
    padding: 4,
    '&:hover': {
      color: '#dc3545',
    },
  },
  title: {
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
}));

function CheckoutContainer({ image, price, id, quantity, title }) {
  const user = useSelector((state) => state.user_login.details);
  const classes = useStyles();
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.checkout);
  const handleRemoveFromCart = () => {
    dispatch(removeFromCartSaga({ id: user.user.id, product_id: id  }));
  };

  return (
    <div className={classes.cartItem}>
      <img src={image} alt={title || 'Product'} className={classes.itemImage} />
      <div className={classes.itemDetails}>
        <div className={classes.itemInfo}>
          <Typography variant="subtitle1" component="h3" className={classes.title}>
            {title || 'Book Title'}
          </Typography>
          <Typography variant="body2" className={classes.quantity}>
            Qty: {quantity}
          </Typography>
        </div>
        <div className={classes.priceInfo}>
          <IconButton 
            className={classes.removeButton} 
            size="small"
            onClick={handleRemoveFromCart}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <Typography className={classes.price}>
            Rs {price.toFixed(2)}/-
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CheckoutContainer;
  