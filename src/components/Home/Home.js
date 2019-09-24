import React, { useState, useEffect } from 'react'
import desktopImage from '../../assets/images/EA_Home3.png';
import mobileImage from "../../assets/images/Toxic_sm.png";
import { Container, Jumbotron } from 'reactstrap';
// import styled from 'styled-components';

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const imageUrl = windowWidth >= 699 ? desktopImage : mobileImage;
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
        <div className="img.bg">
        <Jumbotron >
            <Container >
                <div >
                    <div className='defaultHero' style={{ backgroundImage: `url(${imageUrl})` }}></div>
                </div>
            </Container>
        </Jumbotron>
        </div>
    );
};
export default Home;