import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import "./banner.css"
import image1 from '../../Assets/promotion_1.jpg'
import image2 from '../../Assets/promotion2.jpg'
import image3 from '../../Assets/promotion 3.jpg'

function Banner() {

    return (
        <div>
            <Carousel autoplay>
                <div className="image" >
                    <img className="image1" src={image1} />
                </div>
                <div>
                    <img className="image1" src={image2} />
                </div>
                <div>
                    <img className="image1" src={image3} />
                </div>
               
            </Carousel></div>
    )
}

export default Banner