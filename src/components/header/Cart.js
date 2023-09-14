import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "start",
    top: "0px",
    width: "100%",
    padding: "0px 0px 19px 0px",
    border: "none",
    "&:hover": {
      border: " none",
    },
  },

  icon: {
    color: "#777d74",
    marginLeft: "0px",
    marginTop: "10px",

  },
  count: {
    marginTop: "0px",
    color: "#777d74",
    textDecoration: "none",
    margin: "0px",

    width: "5px",
    padding: "10px",
  },
  checkout_link: {
    textDecoration: "none",
    // border: "1px solid white",
    color: "#777d74",
  },
});
const theme = createTheme({
  palette: {
    neutral: {
      main: '#d22129',
      contrastText: '#ffffff',
    },
  },
});
function Cart() {
  const classes = useStyles();
  const counts = useSelector((state) => state.checkout);
  return (
    <div className={classes.root}>
      <span className={classes.icon}>
        <Link className={classes.checkout_link} to="/checkout">
          <ThemeProvider theme={theme}>
            <Badge
              badgeContent={counts.totalItems}
              color="error"
              fontSize="small">
              < ShoppingCartOutlinedIcon fontSize="small" />
            </Badge>
          </ThemeProvider>
        </Link>
      </span>
    </div>
  );
}

export default Cart;
