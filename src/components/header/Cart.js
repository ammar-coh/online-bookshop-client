import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    top: "0px",
    width: "100%",
    padding: "10px",
    border: "none",
    // border:"1px solid white",

    "&:hover": {
      border: " none",
    },
  },

  icon: {
    color: "white",
    marginLeft: "0px",
    marginTop: "10px",

    // width: "100px",
  },
  count: {
    marginTop: "0px",
    color: "white",
    textDecoration: "none",
    margin: "0px",

    width: "5px",
    padding: "10px",
  },
  checkout_link: {
    textDecoration: "none",
    // border: "1px solid white",
    color: "white",
  },
});

function Cart() {
  const classes = useStyles();
  const counts = useSelector((state) => state.checkout);
  return (
    <div className={classes.root}>
      <span className={classes.icon}>
        <Link className={classes.checkout_link} to="/checkout">
          <Badge badgeContent={counts.totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </span>
    </div>
  );
}

export default Cart;
