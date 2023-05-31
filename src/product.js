import React, { useEffect } from "react";
import { getUser, getProductsToCartSaga } from "./redux/actions/index";
import { makeStyles } from "@material-ui/core/styles";
import ItemContainer from "./ItemContainer";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/index";
import checkout from "./checkout";
import AddProduct from "./addProduct";
import Chatroom from  "./components/chat/index"               
import Del from "./Del";
import Chat from "./chat";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "50px",
    flexWrap: "wrap",
    gap: "31px",
    zIndex: 2,
  },
});

function Product({ setUserAvailable, socket }) {
  const dispatch = useDispatch();
  const uname = useSelector((state) => state.user_login.details);
  useEffect(() => {
    localStorage.getItem("authorization") && dispatch(getProductsToCartSaga());
  }, [uname?.user?.displayName]);

  const classes = useStyles();
  const details = useSelector((state) => state.productDetails.details);

  useEffect(() => {
    localStorage.getItem("authorization") && dispatch(getUser());
  }, []);

  return (
    <div>
      <Header setUserAvailable={setUserAvailable} />
      <Switch>
        <Route path="/products/add" exact component={AddProduct} />
        <Route path="/products/del" exact component={Del} />
        <Route path="/checkout" exact component={checkout} />
        <Route path="/chatroom" exact component={Chatroom} />
        <div>
          <div className={classes.root}>
            {details.length > 0 &&
              details.map((i) => (
                <div>
                  <ItemContainer
                    image={i?.image}
                    price={i.price}
                    year={i.year}
                    id={i._id}
                    rating={i.rating}
                  />
                </div>
              ))}
          </div>
          <div>
            <Chat socket={socket} />
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default Product;
