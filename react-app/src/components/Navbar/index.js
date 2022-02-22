import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import logo from './BBLogo.jpg';

const Navbar = () => {
   return (
      <>
         <Nav>
            <NavMenu>
               <img src={logo} alt="logo" height="75" width="75"/>
               <NavLink to="" activeStyle>
                  Home
               </NavLink>
               <NavLink to="/about" activeStyle>
                  About
               </NavLink>
               <NavLink to="/contact" activeStyle>
                  Contact Us
               </NavLink>
               <NavLink to="/tutorial" activeStyle>
                  Tutorial
               </NavLink>
               <NavLink to="/sign-up" activeStyle>
                  Sign up/ Sign in
               </NavLink>
            </NavMenu>
         </Nav>
      </>
   );
};

export default Navbar;