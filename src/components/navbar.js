import React, { Component } from 'react';
import { Navbar , NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        <div>
            <Navbar brand='MT' right style={{backgroundColor:'#7f8fa6'}}>
            <NavItem  href="/" to="/">About Me</NavItem>
            <NavItem  href="/services" to="/services">My Services</NavItem>
            <NavItem href="/works" to="works">My Works</NavItem>
            <NavItem  href="/videos" to="videos">My Videos</NavItem>
            <NavItem href="/request" to="request">Request a Quote</NavItem>
             </Navbar>
      </div>
    )
  }
}
export default NavBar;