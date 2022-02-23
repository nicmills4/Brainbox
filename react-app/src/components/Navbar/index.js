import React from "react";
import { Nav, NavLink, NavMenu, BarsIcon, ReadMeIcon, SearchIcon, ToolboxIcon, SignInIcon } from "./NavbarElements";
import logo from './BBLogo.jpg';
import Header from '../Header/index.js';

const Navbar = () => {
   return (
      <>
         <Nav>
            <NavMenu>
               <img src={logo} alt="logo" height="75" width="75"/>
               <Header/>
               <NavLink to="" activeStyle>
                  <BarsIcon/>
                  Home
               </NavLink>
               <NavLink to="/about" activeStyle>
                  <ReadMeIcon/>
                  About
               </NavLink>
               <NavLink to="/search" activeStyle>
                  <SearchIcon/>
                  Search
               </NavLink>
               <NavLink to="/tutorial" activeStyle>
                  <ToolboxIcon/>
                  Tutorial
               </NavLink>
               <NavLink to="/sign-up" activeStyle>
                  <SignInIcon/>
                  Sign up/ Sign in
               </NavLink>
            </NavMenu>
         </Nav>
      </>
   );
};

export default Navbar;