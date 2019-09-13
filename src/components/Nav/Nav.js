import React from 'react';
import { Link } from 'react-router-dom';
import {
    Input,
    InputGroup,
    InputGroupAddon,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
// import Search from '../../containers/Search/Search';


class MyNav extends React.Component {
    constructor (props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle () {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render () {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">Eapharmics</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>


                            <NavItem >
                                <NavLink tag={Link} to="/software">Software </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/services">Services</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/cfr">21 CFR Part II</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/about" >About</NavLink>
                            </NavItem>

                            <NavItem >
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                                    <Input />
                                </InputGroup>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default MyNav; 