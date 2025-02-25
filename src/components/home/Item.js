import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Route, Switch, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { addToCartSaga, updateUserProfile, deleteDispatch } from "../../redux/actions";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { useStyles } from './itemStyle'

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Item({ id, image, price, rating, author, title, description }) {
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
  const link = () => {
    const book = [
      {
        _id: id,
        image: image,
        price: price,
        author: author,
        description: description,
        rating:rating,
        title:title
      }
    ]
    localStorage.setItem("bookSearch", JSON.stringify(book))
  }
  return (
<Box className={classes.root} >
    <Card >
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
                <Link to="/book page" onClick={() => { link() }} className={classes.linkTitle} >
                  <Typography
                    className={classes.title}
                    variant="h7"
                    component="h2"
                  >
                    {title ? title.replace(/\b\w/g, (match) => match.toUpperCase()) : "No Title"}
                  </Typography>
                </Link>
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
                        style={{ cursor: "cursor", marginRight: 5 }}
                        color={rating > index ? colors.orange : colors.grey}
                        onClick={
                          () =>
                            dispatchTwo(
                              updateUserProfile({ ratings: index + 1, id: id })
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
                          dispatchTwo(updateUserProfile({ ratings: index + 1, id: id }))
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
    </Card>
    </Box>
  );
}

export default Item;
