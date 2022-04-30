import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

export default class Header extends Component {

    render() {
        return (
            <Navbar  sticky="top" bg="primary" variant="dark">
            
            <Container>
                {/* <img src={logo} style={{width:100, marginTop: -7}} /> */}
                <Navbar.Brand to="/">Ethion</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">             
                {this.props.name?  
                    <Nav className="ms-auto">
                    <Navbar.Brand to="/">{this.props.name}</Navbar.Brand>
                        <Avatar>{this.props.name[0]}</Avatar>
                    </Nav>
                :''}
                {this.props.loggedIn?
                    <Link className="nav-link" to="/Logout" style={{color:"white"}} >Logout</Link>
                :<Link className="nav-link" to="/Login" >Login</Link>}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}