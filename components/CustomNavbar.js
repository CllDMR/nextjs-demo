import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">HeadPorts</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {this.props.navList.map((item) => {
            return (
              <NavItem>
                <Link href={`/${item.pathName}`} passHref>
                  <NavLink >{item.name}</NavLink>
                </Link>
              </NavItem>
            )
          })}

        </Nav>
      </Navbar>
    )
  }
}