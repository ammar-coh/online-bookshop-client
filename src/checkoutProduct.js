import React from "react";
//import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartSaga } from "./redux/actions";
import { useFormik } from "formik";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 50,
    marginTop: 30,
    width: "200px",
  },
  media: {
    width: "150px",
    height: "250px",
    marginLeft: 27,
  },
  cart: {
    backgroundColor: "#FF9900",
    color: "#000000",
    marginLeft: 30,
    fontSize: "10px",
  },
  qty: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "26px",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  MuiCardContentRoot: {
    padding: "0px",
},
  quan: {
    // border:"1px solid black",
    width: "25px",
  },
  price: {
    display: "flex",
    justifyContent: "start",
    paddingLeft: "26px",
    paddingTop: "10px",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
});

function Checkoutproduct({ image, price, quantity, id }) {
  const user = useSelector((state) => state.user_login.details);
  const classes = useStyles();
  const counts = useSelector((state) => state.checkout);
  //  var qty = 1
  var spread = [...counts.products];
  var maps = spread.map((i) => {
    if (i.id == id) {
      return i;
    }
  });
  var filtered = maps.filter(function (i) {
    return i != undefined;
  });

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      link: "",
      price: "",
      year: "",
      ratings: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.price}>
          <Typography gutterBottom variant="h7" component="h2">
            Price $ {price}
          </Typography>
        </CardContent>
        <CardContent className={classes.qty}>
          <span className={classes.quan}>Qty</span>

          <span>{quantity}</span>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            dispatch(
              removeFromCartSaga({ id: user.user.id, product_id: id })
            );
          }}
          className={classes.cart}
          size="small"
        >
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Checkoutproduct;
