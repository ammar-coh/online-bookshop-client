import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context';
import Rating from '@mui/material/Rating';
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { useStylesIndex } from './style'
import { addToCartSaga } from '../../redux/actions/index';
function BookPage() {
    const dispatch = useDispatch()
    const classes = useStylesIndex()
    const user = useSelector((state) => state.user_login.details);
    const { bookSearchResult, setBookSearchResult } = useContext(Context);
    const bookDataArray = localStorage.getItem("bookSearch")
    const bookObject = JSON.parse(bookDataArray)[0]
    return (
        <Box className={classes.box}>
            <Grid className={classes.main}>
                <Grid className={classes.imageDiv}>
                    <Grid>
                        <img className={classes.image} src={bookObject?.image} />
                    </Grid>
                    <Grid className={classes.addButton}>
                        <Button
                            onClick={
                                () =>
                                    dispatch(addToCartSaga({ id: user.user.id, product_id: bookObject?._id }))
                            }
                            className={classes.cart}
                            size="small">
                            Add to Cart
                        </Button>
                    </Grid>
                </Grid>
                <Grid className={classes.bookInformation}>
                    <Grid className={classes.title}>
                        <Typography variant="h3"
                            style={{ fontFamily: "Montserrat, sans-se" }}>{bookObject?.title.replace(/\b\w/g, (match) => match.toUpperCase())}</Typography>
                    </Grid>
                    <Grid className={classes.author}>
                        <Typography
                            style={{ fontFamily: "Montserrat, sans-se",fontSize:"20px" }}>By: <span style={{color:"#d22129",fontSize:"20px",fontWeight:700}}>{bookObject?.author}</span></Typography>
                    </Grid>
                    <Grid className={classes.rating}>
                        <Typography> <Rating value={bookObject?.rating} readOnly /> </Typography>
                    </Grid>
                    <Grid className={classes.price}>
                        <Typography variant="h7"
                            style={{ fontFamily: "Montserrat, sans-se" }}>${bookObject?.price}</Typography>
                    </Grid>

                    <Grid className={classes.description}>
                        <Typography variant="h6" style={{
                            fontFamily:"Montserrat, sans-se",fontWeight:700}}>Description</Typography>
                        <Typography>{bookObject?.description}</Typography>
                    </Grid>


                </Grid>
            </Grid>
        </Box>
    )
}

export default BookPage