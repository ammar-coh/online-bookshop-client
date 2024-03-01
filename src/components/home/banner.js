import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import "./banner.css"
import image1 from '../../Assets/promotion_1.jpg'
import image2 from '../../Assets/promotion2.jpg'
import image3 from '../../Assets/promotion 3.jpg'
import { useStyles } from './bannnerStyle'
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Banner() {
    const classes = useStyles()
    return (

        <Grid
            container
            className={classes.root}
            xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
                item
                xs={12} sm={12} md={12} lg={12} xl={12}
                className={classes.caroselContainer}
            >
                <Carousel autoplay>
                    <div>
                        <img className="image1" src={image1} alt="Image 1" />
                    </div>
                    <div>
                        <img className="image1" src={image2} alt="Image 2" />
                    </div>
                    <div>
                        <img className="image1" src={image3} alt="Image 3" />
                    </div>
                </Carousel>
            </Grid>
        </Grid>

    )
}

export default Banner