import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { addToCartSaga, updateUser, deleteDispatch } from "./redux/actions";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

const useStyles = makeStyles({
  root: {
    marginLeft: "0px",
    width: "100%",
    zIndex: 1,

  },
  mainContainer: {
    display: "flex",
    padding: "10px 5px",
  },
  image_container: {
    padding:"0px 10px 0px 0px",
    width:"30%",
  }
  ,
  information_container: {
    // border: "1px solid yellow",
    display: "grid",
    width:"70%",
    "& .MuiCardContent-root": {
      padding: "0px"
    }
  },
  media: {
    width: "100%",
    height: "168px",
    zIndex: 2,
  },
  update: {
    fontSize: "10px",
    marginLeft: "124px",
    marginTop: "-32px",
    color: "#FFC312",
    width: "26px",
  },
  title_div: {
    // border:"1px solid black",
    height: "36px",
    padding:"10px 0px 0px 0px"

  },
  title: { 
    color:"#333533",
    fontFamily:"Montserrat', sans-se",
    fontWeight: 500,
    fontSize:"14px"
  },
  author_div: {
    // border:"1px solid black",
    padding:"10px 0px 0px 0px"

  },
  author: {
    color:"#383838",
    fontFamily:"'Montserrat', sans-se",
    fontSize:"13px"
    
  },
  rating_div: {
    // border: "1px solid black",
    padding:"10px 0px 0px 0px"

  },
  price_div: {
    // border: "1px solid black",
    padding:"10px 0px 10px 0px"

  },
  price:{
    color:"#000",
    fontFamily:"'Montserrat', sans-se",
    fontWeight: 700,
    fontSize:"15px"
  },
  addtoCart_div: {
    // border: "1px solid black",
    "& .MuiCardActions-root": {
      padding: "0px 0px 0px 0px"
    }
  },

  cart: {
    backgroundColor: "#d22129",
    color: "#ffffff",
    fontSize: "10px",
    zIndex: 1,
    "&:hover": {
      color: "black",
      backgroundColor: "white"
    },
    padding:"7px 5px"
  },

  input: {
    width: "70px",
    marginTop: 5,
    marginLeft: 52,

    fontSize: "10px",
  },
  del: {
    hover: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
});
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Item({ id, image, price, rating, author, title }) {
  const user = useSelector((state) => state.user_login.details);
  const ratings = Array(5).fill(0);
  const [currentRating, setRating] = useState(0);
  const [currentHoverValue, setHoverValue] = useState(undefined);
  const [rats, setRats] = useState(rating);
  const handleRats = (value) => {
    setRats(value);
  };

  const handleClickRat = (value) => {
    setRating(value);
  };
  const handleHover = (v) => {
    setHoverValue(v);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const classes = useStyles();
  const [newPrice, setNewPrice] = useState();
  const dispatch = useDispatch();
  const dispatchTwo = useDispatch();

  const getPrice = (event) => {
    setNewPrice(event.target.value);
  };

  var a = parseInt(newPrice);

  return (
    <Card className={classes.root}>
      <div className={classes.mainContainer}>
        <div className={classes.image_container}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </div>
        <div className={classes.information_container}>
          <CardActionArea>
            <CardContent>
              <div className={classes.title_div}>
                <Typography
                  className={classes.title}
                  variant="h7"
                  component="h2"
                >
                  {title ? title : "No Title"}
                </Typography>
              </div>
              <div className={classes.author_div}>
                <Typography
                  className={classes.author}
                  variant="h7"
                  component="h2"
                >
                  {author ? author : "Unknown"}
                </Typography>
              </div>
              <div className={classes.rating_div}>
                {rating >= 1
                  ? ratings.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        style={{ cursor: "cursor", marginRight: 10 }}
                        color={rating > index ? colors.orange : colors.grey}
                        onClick={
                          () =>
                            dispatchTwo(
                              updateUser({ ratings: index + 1, id: id })
                            )
                        }
                        onHover={() => handleHover(index + 1)}
                        onMouseLeave={handleMouseLeave}
                      />
                    );
                  })
                  : ratings.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        style={{ cursor: "cursor", marginRight: 10 }}
                        color={
                          (currentRating || currentHoverValue) > index
                            ? colors.orange
                            : colors.grey
                        }
                        /*onClick={() => handleClickRat(index + 1)}*/
                        onClick={() =>
                          dispatchTwo(updateUser({ ratings: index + 1, id: id }))
                        }
                        onHover={() => handleHover(index + 1)}
                        onMouseLeave={handleMouseLeave}
                      />
                    );
                  })}

              </div>

              <div className={classes.price_div}>
                <Typography
                  className={classes.price}
                  gutterBottom
                  variant="h7"
                  component="h2"
                >
                  Price $ {price}
                </Typography>
              </div>
            </CardContent>


            <div className={classes.addtoCart_div}>
              <CardActions>
                <Button
                  onClick={() =>
                    dispatch(addToCartSaga({ id: user.user.id, product_id: id }))
                  }
                  className={classes.cart}
                  size="small"
                >
                  Add to Cart
                </Button>
                {user.role == "admin" ? (
                  <BsTrash
                    onClick={() =>
                      dispatch(deleteDispatch({ id: user.user.id, product_id: id }))
                    }
                    className={classes.del}
                  />
                ) : null}
              </CardActions>
            </div>

          </CardActionArea>

        </div>
      </div>

      {/* {user.role == "admin" ? (
        <input
          className={classes.input}
          placeholder="update price"
          type="number"
          onChange={getPrice}
        />
      ) : null}
      <CardActions>
        {user.role == "admin" ? (
          <GrUpdate
            className={classes.update}
            onClick={() =>
              dispatch(
                updateUser({
                  id: id,
                  price: a,
                })
              )
            }
          />
        ) : null}
      </CardActions> */}

      {/* Update price */}
    </Card>
  );
}

export default Item;
