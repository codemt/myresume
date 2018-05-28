import React, { Component } from 'react';
import { Navbar , NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        <div>
            <Navbar brand='MT' right style={{backgroundColor:'#7f8fa6'}}>
            <NavItem componentClass={Link} href="/" to="/">About Me</NavItem>
            <NavItem componentClass={Link} href="/services" to="/services">My Services</NavItem>
            <NavItem componentClass={Link}href="/works" to="works">My Works</NavItem>
            <NavItem componentClass={Link} href="/videos" to="videos">My Videos</NavItem>
            <NavItem componentClass={Link} href="/request" to="request">Request a Quote</NavItem>
             </Navbar>
      </div>
    )
  }
}
export default NavBar;