import React from 'react'
import { CardFooter } from 'reactstrap';

const bullet = '\u2022';
const copyright = '\u00A9'
const Footer = (props) => {
    return (
        <CardFooter className="footer, content-inside">
               <h6> Copyright {copyright} 2019 EnviroApps {bullet} Orlando FL 32835 USA</h6> 
        </CardFooter>
    )
}
export default Footer;