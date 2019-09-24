import React, { useState, useEffect } from 'react'
import desktopImage from '../../assets/images/banner1.jpg';
import mobileImage from "../../assets/images/ea_toxic.jpg";
import { Container, Jumbotron } from 'reactstrap';
// import styled from 'styled-components';

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 799 ? desktopImage : mobileImage;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });
    return (
        <Jumbotron fluid>
            <Container fluid>
                <div >
                    <div className='defaultHero' style={{ backgroundImage: `url(${imageUrl})` }}></div>
                </div>
            </Container>
        </Jumbotron>
    );
};
export default Home;