import React, { useEffect, useContext } from "react";
import { getUser, getProductsToCartSaga } from "../../redux/actions/index";
import { makeStyles } from "@material-ui/core/styles";
import ItemContainer from "../../ItemContainer";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "../header/index";
import checkout from "../../checkout";
import AddProduct from "../../addProduct";
import Chatroom from "../chat/index"
import Del from "../../Del";
import Chat from "../../chat";
import Banner from './banner'
import Sidebar from '../sidebar/index'
import Context from '../../context'
const useStyles = makeStyles({
    root: {
        display: "flex",
        padding: "50px",
        flexWrap: "wrap",
        gap: "31px",
        zIndex: 2,
        width: "100%",
        marginLeft: "auto"
    },
    main: {
        display: "flex",
        width: "100%",
    },
    header_content_side: {
        width: (props)=>(!props.sideBarCollapsed?"97%":"80%")
    },
    sidebar_container: {
        width:(props)=>(!props.sideBarCollapsed? "3%":"20%"),
        backgroundColor:"#ffffff"
    },
    book_container: {
        width: "22.2%!important",
        minHeight: "208px",
    },
    footer: {
        backgroundColor: "#333533",
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px"
    },
    footer_p: {
        color: "#ffffff",
        fontFamily: "Montserrat, sans-se",
        fontSize: "12px",
        textAlign: "center",
        margin: "20px"

    },

    banner: {
        justifyContent: "center",
        padding: "10px 340px",
        width: "100%",
        marginLeft: "auto"
    },
    chat: {
        padding: "10px 0px 0px 0px",
    }

});

function Home({ setUserAvailable, socket }) {
    const {
        roomID,
        setRoomID,
        currentChat,
        setCurrentChat,
        isActive,
        setIsActive,
        recepient_status,
        notification_open,
        setNotificationOpen,
        setRecepientId,
        sideBarCollapsed,
        setSideBarCollapsed
    } = useContext(Context);
    console.log("collaposed", sideBarCollapsed)
    const dispatch = useDispatch();
    const uname = useSelector((state) => state.user_login.details);
    useEffect(() => {
        localStorage.getItem("authorization") && dispatch(getProductsToCartSaga());
    }, [uname?.user?.displayName]);

    const classes = useStyles({sideBarCollapsed});
    const details = useSelector((state) => state.productDetails.details);

    useEffect(() => {
        localStorage.getItem("authorization") && dispatch(getUser());
    }, []);

    return (
        <div>
            <div className={classes.main}>
                <div className={classes.sidebar_container}>
                    <Sidebar />
                </div>
                <div className={classes.header_content_side}>
                    <Header setUserAvailable={setUserAvailable} />
                    <Switch>
                        <Route path="/products/add" exact component={AddProduct} />
                        <Route path="/products/del" exact component={Del} />
                        <Route path="/checkout" exact component={checkout} />
                        <Route path="/chatroom" exact component={Chatroom} />
                        <div>
                            <div className={classes.banner}>
                                <Banner />
                            </div>
                            <div className={classes.root}>
                                {details.length > 0 &&
                                    details.map((i) => (
                                        <div className={classes.book_container}>
                                            <ItemContainer
                                                image={i?.image}
                                                price={i.price}
                                                year={i.year}
                                                id={i._id}
                                                rating={i.rating}
                                                author={i?.author}
                                                title={i?.title}
                                            />
                                        </div>
                                    ))}

                            </div>



                        </div>
                    </Switch>
                    <div className={classes.footer}>
                        <span>
                            <p className={classes.footer_p}>Copyright © 2023, Liberty Books, All Rights Reserved.</p>
                        </span>
                        <span className={classes.chat}>
                            <Chat socket={socket} />
                        </span>

                    </div>
                </div>
            </div>



        </div>
    );
}

export default Home;
