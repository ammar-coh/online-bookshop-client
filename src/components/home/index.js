import React, { useEffect, useContext } from "react";
import { getBookList, getProductsToCartSaga } from "../../redux/actions/index";
import ItemContainer from "./ItemContainer";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "../header/index";
import checkout from "../../checkout";
import AddProduct from "../../addProduct";
import Chatroom from "../chat/index"
import Banner from './banner'
import Sidebar from '../sidebar/index'
import Context from '../../context'
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import Profile from '../profile/index'
import Books from '../books/index'
import Loading from '../loading'
import CreateGroup from '../create group'
import BookPage from '../bookPage/index'
import { useStyles } from './indexStyle'
import Navigation from '../nav'
function Home({ setUserAvailable, socket }) {
    const {
        loader,
        sideBarCollapsed,
    } = useContext(Context);
    const dispatch = useDispatch();
    const uname = useSelector((state) => state.user_login.details);
    const user = useSelector((state) => state.user_login.details);
    useEffect(() => {
        localStorage.getItem("authorization") && dispatch(getProductsToCartSaga());
    }, [uname?.user?.displayName]);

    const classes = useStyles({ sideBarCollapsed });
    const details = useSelector((state) => state.books.details);

    useEffect(() => {
        localStorage.getItem("authorization") && dispatch(getBookList({filter:{}}));
    }, []);
  
   
    return (
        <div> {loader ? <Loading /> :
            <div className={classes.main}>
                {/* <div className={classes.sidebar_container}>

                    <Sidebar />
                </div> */}
                <div className={classes.header_content_side}>
                    {/* <Header setUserAvailable={setUserAvailable} /> */}
                    <Navigation/>
                    {/* <Switch>
                        <Route path="/products/add" exact component={AddProduct} />
                        <Route path="/checkout" exact component={checkout} />
                        <Route path="/book club" exact component={Chatroom} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/books" exact component={Books} />
                        <Route path="/create group" exact component={CreateGroup} />
                        <Route path="/book page" exact component={BookPage} />

                        <div className={classes.body}>
                            <div>
                                <Banner  />
                            </div>
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
                                                author={i?.author}
                                                title={i?.title}
                                                description={i?.description}
                                            />
                                        </div>
                                    ))}

                            </div>



                        </div> 
                    </Switch> */}
                    <div className={classes.footer}>
                        <span>
                            <p className={classes.footer_p}>Copyright © 2023, Liberty Books, All Rights Reserved.</p>
                        </span>
                        {/* <span className={classes.chat}>
                    <Chat socket={socket} />
                </span> */}

                    </div>
                </div>
            </div>}




        </div>
    );
}

export default Home;
