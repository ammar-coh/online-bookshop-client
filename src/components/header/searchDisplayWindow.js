import React, { useState, useRef, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useStylesSDW } from './style'
import Context from '../../context';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
};

function SearchResultsDisplay({ searchResult, setSearchResult, setSearchKey }) {
    const {
        setBookSearchResult
    } = useContext(Context);
    const classes = useStylesSDW()
    const user = useSelector((state) => state.user_login.details);
    const containerRef = useRef(null);
    // Function to handle clicks outside the Card
    function handleClickOutside(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSearchKey('')
            setSearchResult([])
        }
    }

    // Attach click event listener when the component mounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const link = (id) => {
        const findBookById = searchResult.filter((book) => book._id === id ?book:null)
        setBookSearchResult(findBookById)
        localStorage.setItem("bookSearch", JSON.stringify(findBookById))
        setSearchKey('')
        setSearchResult([])
    }
    return (
        <>

            {searchResult.map((book, index) => (
                <Link className={classes.link} to='/book page' onClick={()=>{link(book._id)}} >
                    <Card className={classes.root} ref={containerRef}>
                        <div className={classes.mainContainer}>
                            <div className={classes.image_container}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={book.image}
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
                                                {book.title ? book.title.replace(/\b\w/g, (match) => match.toUpperCase()) : "No Title"}
                                            </Typography>
                                        </div>
                                        <div className={classes.author_div}>
                                            <Typography
                                                className={classes.author}
                                                variant="h7"
                                                component="h2"
                                            >
                                                {book.author ? book.author : "Unknown"}
                                            </Typography>
                                        </div>
                                        <div className={classes.price_div}>
                                            <Typography
                                                className={classes.price}
                                                gutterBottom
                                                variant="h7"
                                                component="h2"
                                            >
                                                Price $ {book?.price}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>

                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </>
    );
}

export default SearchResultsDisplay;
