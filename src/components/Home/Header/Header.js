import React from 'react';
import laptop from '../../../images/laptopBg.jpg'
import tv from '../../../images/tvBg.jpg'
import phone from '../../../images/mobileBg.jpg'
// import Carousel from 'react-bootstrap/lib/Carousel';
import './Header.css'
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="headerContainer">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    style={{height:'100vh'}}
                    className="d-block w-100"
                    src={laptop}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{paddingBottom: '19%'}}>
                    <h3 className="heading">Amazing PC support and Exchange</h3>
                    <p className="headingQuote">Fast and Affordable Price.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    style={{height:'100vh'}}
                    className="d-block w-100"
                    src={phone}
                    alt="Second slide"
                    />

                    <Carousel.Caption style={{paddingBottom: '19%'}}>
                    <h3 className="heading" style={{color:'honeydew'}}>CellPhone repair</h3>
                    <p className="headingQuote" style={{color:'honeydew'}}>Fast and Affordable Price.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    style={{height:'100vh'}}
                    className="d-block w-100"
                    src={tv}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{paddingBottom: '19%'}}>
                    <h3 className="heading" style={{color:'crimson'}}>Television Repair and Exchange</h3>
                    <p className="headingQuote" style={{color:'crimson'}}>Fast and Affordable Price.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Header;