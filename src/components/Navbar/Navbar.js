import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/evapps-logo.png';

import {
    // Input,
    // InputGroup,
    // InputGroupAddon,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
            <div className="nav-header">
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">
                    <img src={Logo} className="nav-image" alt="EaPharmics" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar >
                                <DropdownToggle nav caret>
                                    SaaS
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={Link} to="/toxics">eaToxic</DropdownItem>
                                    <DropdownItem tag={Link} to="/generics">eaGenerics</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

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

                            {/* <NavItem >
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                                    <Input />
                                </InputGroup> 
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default MyNav; 